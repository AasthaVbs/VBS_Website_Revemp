import { BUILD_YOUR_TEAM_MAPBOX_ACCESS_TOKEN } from "@/constants/sixty-minutes-team-data";

export function getLocationLabel(location) {
  if (!location) return "";
  if (typeof location === "string") return location;
  return location.label || location.name || location.city || "";
}

export function isLocationValid(location) {
  return getLocationLabel(location).trim().length > 1;
}

export function getLocationCoords(location) {
  if (!location || typeof location !== "object") return null;
  const lat = Number(location.lat);
  const lng = Number(location.lng);
  if (Number.isNaN(lat) || Number.isNaN(lng)) return null;
  return { lat, lng };
}

export function featureToLocation(feature) {
  return {
    label: feature.place_name,
    lat: feature.center[1],
    lng: feature.center[0],
  };
}

export async function fetchMapboxAccessToken() {
  try {
    const response = await fetch("/api/mapbox/token");
    if (response.ok) {
      const data = await response.json();
      const token = String(data?.token || "").trim();
      if (token) return token;
    }
  } catch {
    // fall through to public token
  }

  const fallback = String(BUILD_YOUR_TEAM_MAPBOX_ACCESS_TOKEN || "").trim();
  if (!fallback) {
    throw new Error("Mapbox is not configured.");
  }
  return fallback;
}

async function searchMapboxPlacesDirect(query, accessToken) {
  const encoded = encodeURIComponent(query);
  const url =
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${encoded}.json` +
    `?access_token=${encodeURIComponent(accessToken)}` +
    "&autocomplete=true&limit=5" +
    "&types=place,locality,neighborhood,district,region,postcode,address";

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Location search failed");
  }

  const data = await response.json();
  return (data.features || []).map(featureToLocation);
}

export async function searchMapboxPlaces(query, accessToken) {
  const trimmed = String(query || "").trim();
  if (trimmed.length < 2) return [];

  try {
    const response = await fetch(`/api/mapbox/geocode?q=${encodeURIComponent(trimmed)}`);
    if (response.ok) {
      const data = await response.json();
      const features = Array.isArray(data.features) ? data.features : [];
      if (features.length || !accessToken) return features;
    }
  } catch {
    // fall through to direct Mapbox (same as Gatsby)
  }

  const token = String(accessToken || BUILD_YOUR_TEAM_MAPBOX_ACCESS_TOKEN || "").trim();
  if (!token) {
    throw new Error("Location search failed");
  }

  return searchMapboxPlacesDirect(trimmed, token);
}

async function reverseMapboxGeocodeDirect(lat, lng, accessToken) {
  const url =
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json` +
    `?access_token=${encodeURIComponent(accessToken)}` +
    "&types=place,locality,neighborhood,district,region,address&limit=1";

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Could not resolve your location.");
  }

  const data = await response.json();
  const feature = data.features?.[0];
  if (!feature) {
    return {
      label: `${lat.toFixed(4)}, ${lng.toFixed(4)}`,
      lat,
      lng,
    };
  }

  return featureToLocation(feature);
}

export async function reverseMapboxGeocode(lat, lng, accessToken) {
  try {
    const response = await fetch(
      `/api/mapbox/reverse?lat=${encodeURIComponent(lat)}&lng=${encodeURIComponent(lng)}`,
    );
    if (response.ok) {
      return response.json();
    }
  } catch {
    // fall through to direct Mapbox (same as Gatsby)
  }

  const token = String(accessToken || BUILD_YOUR_TEAM_MAPBOX_ACCESS_TOKEN || "").trim();
  if (!token) {
    throw new Error("Could not resolve your location.");
  }

  return reverseMapboxGeocodeDirect(lat, lng, token);
}

export function requestCurrentPosition(options = {}) {
  return new Promise((resolve, reject) => {
    if (typeof navigator === "undefined" || !navigator.geolocation) {
      reject(new Error("Geolocation is not supported in this browser."));
      return;
    }

    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: true,
      timeout: 12000,
      maximumAge: 60000,
      ...options,
    });
  });
}

export async function locateUserWithMapbox(accessToken) {
  const position = await requestCurrentPosition();
  const { latitude, longitude } = position.coords;
  return reverseMapboxGeocode(latitude, longitude, accessToken);
}

export function geolocationErrorMessage(error) {
  if (!error) return "Could not access your location.";
  if (error.code === 1) return "Location permission denied. Allow access in your browser settings.";
  if (error.code === 2) return "Location unavailable. Try searching for your city instead.";
  if (error.code === 3) return "Location request timed out. Please try again.";
  return error.message || "Could not access your location.";
}
