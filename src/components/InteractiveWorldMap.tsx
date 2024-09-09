"use client";

import { useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

type Marker = {
  name: string;
  longitude: number;
  latitude: number;
};

type InteractiveWorldMapProps = {
  initialViewState?: {
    longitude: number;
    latitude: number;
    zoom: number;
  };
  markers?: Marker[];
};

export default function InteractiveWorldMap({ initialViewState, markers }: InteractiveWorldMapProps) {
  const [viewState, setViewState] = useState(initialViewState || {
    longitude: 0,
    latitude: 20,
    zoom: 1.5
  });
  const [popupInfo, setPopupInfo] = useState<Marker | null>(null);

  return (
    <div className="relative">
      <Map
        {...viewState}
        onMove={evt => setViewState(evt.viewState)}
        mapStyle="mapbox://styles/mapbox/light-v10"
        mapboxAccessToken={MAPBOX_TOKEN}
        projection={{ name: 'globe' }}
      >
        {markers && markers.map((marker, index) => (
          <Marker
            key={index}
            longitude={marker.longitude}
            latitude={marker.latitude}
            anchor="bottom"
            onClick={e => {
              e.originalEvent.stopPropagation();
              setPopupInfo(marker);
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
              <p>Click to explore gift ideas from {popupInfo.name}</p>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
}