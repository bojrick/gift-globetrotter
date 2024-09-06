"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Map, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Button } from "@/components/ui/button";
import Image from 'next/image';

// You should move this to an environment variable
const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const topCountries = [
  { name: 'China', population: '1,439,323,776', slug: 'china', longitude: 104.1954, latitude: 35.8617, flag: '🇨🇳' },
  { name: 'India', population: '1,380,004,385', slug: 'india', longitude: 78.9629, latitude: 20.5937, flag: '🇮🇳' },
  { name: 'United States', population: '331,002,651', slug: 'usa', longitude: -95.7129, latitude: 37.0902, flag: '🇺🇸' },
  { name: 'Indonesia', population: '273,523,615', slug: 'indonesia', longitude: 113.9213, latitude: -0.7893, flag: '🇮🇩' },
  { name: 'Pakistan', population: '220,892,340', slug: 'pakistan', longitude: 69.3451, latitude: 30.3753, flag: '🇵🇰' },
  { name: 'Brazil', population: '212,559,417', slug: 'brazil', longitude: -51.9253, latitude: -14.2350, flag: '🇧🇷' },
  { name: 'Nigeria', population: '206,139,589', slug: 'nigeria', longitude: 8.6753, latitude: 9.0820, flag: '🇳🇬' },
  { name: 'Bangladesh', population: '164,689,383', slug: 'bangladesh', longitude: 90.3563, latitude: 23.6850, flag: '🇧🇩' },
  { name: 'Russia', population: '145,934,462', slug: 'russia', longitude: 105.3188, latitude: 61.5240, flag: '🇷🇺' },
  { name: 'Mexico', population: '128,932,753', slug: 'mexico', longitude: -102.5528, latitude: 23.6345, flag: '🇲🇽' },
];

interface InteractiveWorldMapProps {
  onCountrySelect?: (country: string) => void;
}

const InteractiveWorldMap: React.FC<InteractiveWorldMapProps> = ({ onCountrySelect }) => {
  const [viewState, setViewState] = useState({
    longitude: 0,
    latitude: 20,
    zoom: 1.5
  });
  const router = useRouter();

  const handleExploreGifts = (country: typeof topCountries[0]) => {
    if (onCountrySelect) {
      onCountrySelect(country.name);
    } else {
      router.push(`/country/${country.slug}`);
    }
  };

  return (
    <div className="relative">
      <Map
        {...viewState}
        onMove={evt => setViewState(evt.viewState)}
        style={{width: '100%', height: 400}}
        mapStyle="mapbox://styles/mapbox/light-v11"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        {topCountries.map((country) => (
          <Marker
            key={country.slug}
            longitude={Number(country.longitude)}
            latitude={Number(country.latitude)}
            anchor="center"
          >
            <Popup
              anchor="top"
              offset={15}
              closeButton={false}
              closeOnClick={false}
              longitude={Number(country.longitude)}
              latitude={Number(country.latitude)}
            >
              <div className="p-2">
                <h3 className="font-bold">{country.name} {country.flag}</h3>
                <p>Population: {country.population}</p>
                <Button onClick={() => handleExploreGifts(country)} className="mt-2">
                  Explore Gifts
                </Button>
              </div>
            </Popup>
            <div 
              className="w-4 h-4 bg-primary rounded-full border-2 border-white cursor-pointer"
              title={country.name}
            />
          </Marker>
        ))}
      </Map>
      <div className="absolute top-2 right-2 bg-white p-2 rounded shadow">
        {topCountries.map((country) => (
          <div key={country.slug} className="flex items-center mb-1">
            <span className="mr-2">{country.flag}</span>
            <span className="text-sm">{country.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveWorldMap;