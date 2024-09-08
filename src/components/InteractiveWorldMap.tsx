"use client";

import { useState, useEffect } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Button } from "@/components/ui/button";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const popularCountries = [
  { name: 'United States', longitude: -95.7129, latitude: 37.0902 },
  { name: 'Japan', longitude: 138.2529, latitude: 36.2048 },
  { name: 'Italy', longitude: 12.5674, latitude: 41.8719 },
  { name: 'France', longitude: 2.2137, latitude: 46.2276 },
  { name: 'India', longitude: 78.9629, latitude: 20.5937 },
];

export default function InteractiveWorldMap() {
  const [viewState, setViewState] = useState({
    longitude: 0,
    latitude: 20,
    zoom: 1.5
  });
  const [popupInfo, setPopupInfo] = useState<(typeof popularCountries)[0] | null>(null);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(isDarkMode ? 'dark' : 'light');
  }, []);

  const focusCountry = (country: typeof popularCountries[0]) => {
    setViewState({
      longitude: country.longitude,
      latitude: country.latitude,
      zoom: 4
    });
    setPopupInfo(country);
  };

  return (
    <div className="my-12 relative">
      <h2 className="text-3xl font-bold text-center mb-8">Explore Gifts Around the World</h2>
      <div className="mb-4 flex justify-center space-x-2">
        {popularCountries.map((country, index) => (
          <Button key={index} onClick={() => focusCountry(country)} className="bg-white text-black dark:bg-black dark:text-white">
            {country.name}
          </Button>
        ))}
      </div>
      <div className="h-[60vh] w-full rounded-lg overflow-hidden">
        <Map
          {...viewState}
          onMove={evt => setViewState(evt.viewState)}
          mapStyle={theme === 'dark' ? "mapbox://styles/mapbox/dark-v10" : "mapbox://styles/mapbox/light-v10"}
          mapboxAccessToken={MAPBOX_TOKEN}
          projection={{ name: 'globe' }}
        >
          {popularCountries.map((country, index) => (
            <Marker
              key={index}
              longitude={country.longitude}
              latitude={country.latitude}
              anchor="bottom"
              onClick={e => {
                e.originalEvent.stopPropagation();
                setPopupInfo(country);
              }}
            >
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
            </Marker>
          ))}

          {popupInfo && (
            <Popup
              anchor="top"
              longitude={popupInfo.longitude}
              latitude={popupInfo.latitude}
              onClose={() => setPopupInfo(null)}
            >
              <div>
                <h3 className="font-bold">{popupInfo.name}</h3>
                <p>Popular for unique gifts!</p>
                <p>Click to explore gift ideas from {popupInfo.name}</p>
              </div>
            </Popup>
          )}
        </Map>
      </div>
    </div>
  );
}