//@ts-nocheck
'use client';
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from '@react-google-maps/api';
import Link from 'next/link';
import { useState } from 'react';

export default function MapChart({ stations }) {
  const [selectedMarker, setSelectedMarker] = useState(null);

  function handleClick(station) {
    setSelectedMarker(station);
  }

  function getCenter() {
    if (selectedMarker == null) {
      return {
        // hardcoded London location to start
        lat: 52.5,
        lng: -1,
      };
    }
    return { lat: selectedMarker.lat, lng: selectedMarker.long };
  }

  return (
    <div data-testid="google-maps" className="h-[700px] md:w-[700px] w-full">
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY}>
        <GoogleMap
          mapContainerStyle={{
            height: '100%',
            width: '100%',
          }}
          zoom={7}
          center={getCenter()}
          options={{
            streetViewControl: false,
            fullscreenControl: false,
          }}
        >
          {stations.map((station) => (
            <Marker
              key={station.id}
              onClick={() => handleClick(station)}
              position={{
                lat: station.lat,
                lng: station.long,
              }}
            >
              {selectedMarker === station && (
                <InfoWindow
                  position={{
                    lat: station.lat,
                    lng: station.long,
                  }}
                >
                  <div className="p-3 text-black">
                    <h2 className="font-semibold text-lg">{station.label}</h2>
                    {station.town && <p>Town: {station.town}</p>}
                    {station.riverName && (
                      <p>River Name: {station.riverName}</p>
                    )}
                    <p>Latest Readings:</p>
                    {/* TODO - BUILD OUT INFO ON POPUP HERE */}
                    <Link
                      href={`/station/${station.notation}`}
                      value={station.notation}
                      className="text-blue-500"
                    >
                      More info...
                    </Link>
                  </div>
                </InfoWindow>
              )}
            </Marker>
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
