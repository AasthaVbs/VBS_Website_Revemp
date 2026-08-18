"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";

const DEFAULT_CENTER = { lng: -98.5795, lat: 39.8283 };
const DEFAULT_ZOOM = 3.5;
const SELECTED_ZOOM = 12;
const MAP_STYLE = "mapbox://styles/mapbox/streets-v12";

function buildOsmEmbedUrl(lat?: number | null, lng?: number | null) {
  if (lat != null && lng != null) {
    const pad = 0.06;
    const bbox = [lng - pad, lat - pad, lng + pad, lat + pad].join(",");
    return (
      "https://www.openstreetmap.org/export/embed.html" +
      `?bbox=${encodeURIComponent(bbox)}` +
      "&layer=mapnik" +
      `&marker=${encodeURIComponent(`${lat},${lng}`)}`
    );
  }

  return "https://www.openstreetmap.org/export/embed.html?bbox=-125.0,24.396308,-66.93457,49.384358&layer=mapnik";
}

export function SixtyMinutesTeamLocationMap({
  accessToken,
  lat,
  lng,
  label,
  isActive = true,
}: {
  accessToken?: string;
  lat?: number | null;
  lng?: number | null;
  label?: string;
  isActive?: boolean;
}) {
  const hasCoords = lat != null && lng != null;
  const mapRef = useRef<any>(null);
  const markerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [mapReady, setMapReady] = useState(false);
  const [useFallback, setUseFallback] = useState(false);

  const destroyMap = useCallback(() => {
    markerRef.current = null;
    mapRef.current?.remove();
    mapRef.current = null;
    setMapReady(false);
  }, []);

  const initMap = useCallback(
    async (container: HTMLDivElement) => {
      if (!container || !accessToken || !isActive || useFallback || mapRef.current) return;

      try {
        const mapboxgl = (await import("mapbox-gl")).default;
        await import("mapbox-gl/dist/mapbox-gl.css");

        if (!containerRef.current || mapRef.current) return;

        mapboxgl.accessToken = accessToken;

        const pinned = lat != null && lng != null;
        const map = new mapboxgl.Map({
          container,
          style: MAP_STYLE,
          center: pinned ? [lng as number, lat as number] : [DEFAULT_CENTER.lng, DEFAULT_CENTER.lat],
          zoom: pinned ? SELECTED_ZOOM : DEFAULT_ZOOM,
          attributionControl: false,
          dragPan: true,
          scrollZoom: true,
          boxZoom: true,
          dragRotate: false,
          pitchWithRotate: false,
          touchZoomRotate: true,
          doubleClickZoom: true,
          keyboard: true,
          cooperativeGestures: false,
        });

        map.addControl(new mapboxgl.AttributionControl({ compact: true }), "bottom-right");
        map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), "top-right");

        map.on("load", () => {
          map.resize();
          setMapReady(true);
        });

        map.on("error", (event: { error?: unknown }) => {
          console.warn("[VBS] Mapbox GL error", event?.error || event);
          destroyMap();
          setUseFallback(true);
        });

        mapRef.current = map;

        if (pinned) {
          markerRef.current = new mapboxgl.Marker({ color: "#e5232b" })
            .setLngLat([lng as number, lat as number])
            .addTo(map);
        }
      } catch (error) {
        console.warn("[VBS] Mapbox GL init failed", error);
        destroyMap();
        setUseFallback(true);
      }
    },
    [accessToken, destroyMap, isActive, lat, lng, useFallback],
  );

  const setMapContainer = useCallback(
    (node: HTMLDivElement | null) => {
      containerRef.current = node;
      if (node) {
        void initMap(node);
      } else {
        destroyMap();
      }
    },
    [destroyMap, initMap],
  );

  useEffect(() => {
    if (!isActive) {
      destroyMap();
      setUseFallback(false);
      return;
    }

    if (!accessToken) {
      setUseFallback(true);
    }
  }, [accessToken, destroyMap, isActive]);

  useEffect(() => {
    if (!isActive || useFallback || mapReady || !accessToken) return undefined;

    const timer = window.setTimeout(() => {
      if (!mapRef.current) {
        destroyMap();
        setUseFallback(true);
      }
    }, 6000);

    return () => window.clearTimeout(timer);
  }, [accessToken, destroyMap, isActive, mapReady, useFallback]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapReady || useFallback) return undefined;

    let cancelled = false;

    const updateMarker = async () => {
      const mapboxgl = (await import("mapbox-gl")).default;
      if (cancelled || !mapRef.current) return;

      const pinned = lat != null && lng != null;

      if (pinned) {
        if (!markerRef.current) {
          markerRef.current = new mapboxgl.Marker({ color: "#e5232b" })
            .setLngLat([lng, lat])
            .addTo(map);
        } else {
          markerRef.current.setLngLat([lng, lat]);
        }

        map.flyTo({
          center: [lng, lat],
          zoom: Math.max(map.getZoom(), SELECTED_ZOOM),
          essential: true,
          duration: 900,
        });
      } else if (markerRef.current) {
        markerRef.current.remove();
        markerRef.current = null;
      }
    };

    if (map.loaded()) {
      void updateMarker();
    } else {
      map.once("load", () => {
        void updateMarker();
      });
    }

    return () => {
      cancelled = true;
    };
  }, [lat, lng, mapReady, useFallback]);

  useEffect(() => {
    if (!isActive || !mapRef.current) return undefined;

    const resize = () => mapRef.current?.resize();
    resize();
    window.addEventListener("resize", resize);
    const timer = window.setTimeout(resize, 300);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("resize", resize);
    };
  }, [isActive, mapReady]);

  const osmUrl = useFallback && isActive ? buildOsmEmbedUrl(lat, lng) : "";

  return (
    <div className={`byt-location-map-wrap${hasCoords ? " is-pinned" : ""}`}>
      <div className="byt-location-map byt-location-map-anchor">
        {useFallback && osmUrl ? (
          <iframe
            key={osmUrl}
            title={label || "Project location map"}
            src={osmUrl}
            className="byt-location-map-frame"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <>
            <div
              ref={setMapContainer}
              className="byt-location-map-gl"
              aria-label={label || "Project location map"}
            />
            {!mapReady ? <div className="byt-location-map-loading" aria-hidden /> : null}
          </>
        )}
      </div>

      {!hasCoords ? (
        <p className="byt-location-map-hint">
          <i className="ti ti-info-circle" aria-hidden />
          Drag, scroll, or pinch to explore — search above to pin your project.
        </p>
      ) : null}
    </div>
  );
}
