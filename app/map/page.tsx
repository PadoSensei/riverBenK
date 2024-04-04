//@ts-nocheck
import MapChart from '../components/MapChart';

// const stations = [
//     { id: 1, label: "Round Pond", lat: 51.506, lng: -0.184 },
//     { id: 2, label: "The Long Water", lat: 51.508, lng: -0.175 },
//     { id: 3, label: "The Serpentine", lat: 51.505, lng: -0.164 }
//   ];

export default function MapPage() {
  return (
    <>
      <p>I'm the map page</p>
      <MapChart
      // stations={stations}
      />
    </>
  );
}
