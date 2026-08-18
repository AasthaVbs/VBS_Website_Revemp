"use client";

import React, { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { BUILD_YOUR_TEAM_MAPBOX_ACCESS_TOKEN } from "@/constants/sixty-minutes-team-data";
import {
  fetchMapboxAccessToken,
  geolocationErrorMessage,
  getLocationCoords,
  getLocationLabel,
  locateUserWithMapbox,
  searchMapboxPlaces,
} from "@/utils/sixty-minutes-team-location";
import { SixtyMinutesTeamLocationMap } from "./sixty-minutes-team-location-map";

type LocationValue =
  | string
  | null
  | {
      label?: string;
      name?: string;
      city?: string;
      lat?: number;
      lng?: number;
    };

export function SixtyMinutesTeamLocationInput({
  id,
  value,
  onChange,
  disabled = false,
  isActive = true,
}: {
  id?: string;
  value: LocationValue;
  onChange: (location: LocationValue) => void;
  disabled?: boolean;
  isActive?: boolean;
}) {
  const listId = useId();
  const rootRef = useRef<HTMLDivElement | null>(null);
  const debounceRef = useRef<number | null>(null);
  const searchRequestRef = useRef(0);

  const [accessToken, setAccessToken] = useState(BUILD_YOUR_TEAM_MAPBOX_ACCESS_TOKEN);
  const [query, setQuery] = useState(() => getLocationLabel(value));
  const [suggestions, setSuggestions] = useState<{ label: string; lat: number; lng: number }[]>([]);
  const [open, setOpen] = useState(false);
  const [searching, setSearching] = useState(false);
  const [locating, setLocating] = useState(false);
  const [error, setError] = useState("");
  const [inputFocused, setInputFocused] = useState(false);

  const hasMapbox = Boolean(accessToken);
  const coords = useMemo(() => getLocationCoords(value), [value]);
  const isSearchActive =
    inputFocused || searching || (open && suggestions.length > 0) || (query.trim().length >= 2 && !coords);

  useEffect(() => {
    if (accessToken) return undefined;

    let cancelled = false;
    fetchMapboxAccessToken()
      .then((token) => {
        if (!cancelled) setAccessToken(token);
      })
      .catch(() => {
        if (!cancelled) setError("Map search is not configured yet. Enter your city manually.");
      });

    return () => {
      cancelled = true;
    };
  }, [accessToken]);

  useEffect(() => {
    setQuery(getLocationLabel(value));
  }, [value]);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
        setInputFocused(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  const selectLocation = useCallback(
    (location: { label: string; lat: number; lng: number }) => {
      onChange(location);
      setQuery(getLocationLabel(location));
      setSuggestions([]);
      setOpen(false);
      setInputFocused(false);
      setError("");
    },
    [onChange],
  );

  const runSearch = useCallback(
    (text: string) => {
      if (!hasMapbox) return;

      if (debounceRef.current) {
        window.clearTimeout(debounceRef.current);
      }

      const trimmed = text.trim();
      if (trimmed.length < 2) {
        setSuggestions([]);
        setSearching(false);
        setOpen(false);
        return;
      }

      setSearching(true);
      const requestId = searchRequestRef.current + 1;
      searchRequestRef.current = requestId;

      debounceRef.current = window.setTimeout(async () => {
        try {
          const results = await searchMapboxPlaces(trimmed, accessToken);
          if (searchRequestRef.current !== requestId) return;
          setSuggestions(results);
          setOpen(results.length > 0);
          setError("");
        } catch (e) {
          if (searchRequestRef.current !== requestId) return;
          setSuggestions([]);
          setError("Could not load location suggestions. Try again.");
          console.warn("[VBS] Mapbox search failed", e);
        } finally {
          if (searchRequestRef.current === requestId) {
            setSearching(false);
          }
        }
      }, 280);
    },
    [accessToken, hasMapbox],
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const next = event.target.value;
    setQuery(next);
    setError("");

    if (!next.trim()) {
      onChange(null);
      setSuggestions([]);
      setOpen(false);
      return;
    }

    onChange(next);
    runSearch(next);
  };

  const handleUseCurrentLocation = async () => {
    if (disabled || locating) return;

    if (!hasMapbox) {
      setError("Map search is not configured yet. Enter your city manually.");
      return;
    }

    setLocating(true);
    setError("");

    try {
      const location = await locateUserWithMapbox(accessToken);
      selectLocation(location);
    } catch (e) {
      setError(geolocationErrorMessage(e));
      console.warn("[VBS] geolocation failed", e);
    } finally {
      setLocating(false);
    }
  };

  const handleBlur = () => {
    window.setTimeout(() => {
      setInputFocused(false);

      if (!query.trim()) {
        onChange(null);
        return;
      }

      const currentLabel = getLocationLabel(value);
      if (currentLabel === query.trim()) return;

      if (typeof value === "string") {
        onChange(query.trim());
      }
    }, 150);
  };

  return (
    <div className="byt-location-field" ref={rootRef}>
      <div className={`byt-location-search${isSearchActive ? " is-active" : ""}`}>
        <div className="byt-location-input-row">
          <input
            className="finp byt-location-input"
            id={id}
            placeholder={hasMapbox ? "Search city or address" : "City, State"}
            value={query}
            onChange={handleInputChange}
            onFocus={() => {
              setInputFocused(true);
              if (suggestions.length > 0) setOpen(true);
            }}
            onBlur={handleBlur}
            disabled={disabled}
            autoComplete="off"
            role="combobox"
            aria-expanded={open}
            aria-controls={listId}
            aria-autocomplete="list"
          />
          <button
            type="button"
            className="byt-location-detect"
            onClick={handleUseCurrentLocation}
            disabled={disabled || locating || !hasMapbox}
            aria-label="Use my current location"
            title="Use my current location"
          >
            {locating ? (
              <span className="byt-location-detect-spin" aria-hidden />
            ) : (
              <i className="ti ti-current-location" aria-hidden />
            )}
          </button>
        </div>

        {open && suggestions.length > 0 ? (
          <ul className="byt-location-suggestions" id={listId} role="listbox">
            {suggestions.map((item) => (
              <li key={`${item.label}-${item.lat}-${item.lng}`} role="presentation">
                <button
                  type="button"
                  className="byt-location-suggestion"
                  role="option"
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => selectLocation(item)}
                >
                  <i className="ti ti-map-pin" aria-hidden />
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        ) : null}

        {searching ? <p className="byt-location-meta">Searching locations…</p> : null}

        {error ? (
          <p className="byt-location-error" role="alert">
            <i className="ti ti-alert-circle" aria-hidden />
            {error}
          </p>
        ) : null}
      </div>

      {!isSearchActive ? (
        <SixtyMinutesTeamLocationMap
          accessToken={accessToken}
          lat={coords?.lat}
          lng={coords?.lng}
          label={getLocationLabel(value)}
          isActive={isActive}
        />
      ) : null}
    </div>
  );
}
