// @ts-nocheck
'use client';
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from '@react-google-maps/api';
import Link from 'next/link';
import { useState } from 'react';

// const stations = [
//   { id: 1, title: "Round Pond", lat: 51.506, lng: -0.184 },
//   { id: 2, title: "The Long Water", lat: 51.508, lng: -0.175 },
//   { id: 3, title: "The Serpentine", lat: 51.505, lng: -0.164 }
// ];

export default function MapChart() {
  // const [selectedMarker, setSelectedMarker] = useState(null);

  // function handleClick(station) {
  //   setSelectedMarker(station);
  // }

  function getCenter() {
    if (selectedMarker == null) {
      return {
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
          {/* {stations.map((station, id, lat, lng) => ( */}
          <Marker
            key={1}
            // onClick={() => handleClick(station)}
            // lat: 51.506, lng: -0.184
            position={{
              lat: 51.506,
              lng: -0.184,
            }}
          >
            {/* {selectedMarker === station && (
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
                    {station.measures.map((measure, index) => {
                      if (measure !== null) {
                        return (
                          <p key={index}>
                            {measure.value} {measure.unitName}
                          </p>
                        );
                      }
                    })}
                    <Link
                      href={`/station/${station.notation}`}
                      value={station.notation}
                      className="text-blue-500"
                    >
                      More info...
                    </Link>
                  </div>
                </InfoWindow>
              // )} */}
          </Marker>
          {/* ))}  */}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
