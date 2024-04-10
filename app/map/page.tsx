import MapChart from '../components/MapChart';

export default async function MapPage() {
  const data = await fetch('http://riverbenk-api.fly.dev/v1/stations');
  const dataJson = await data.json();
  return (
    <div>
      <h1>Data:</h1>
      <MapChart stations={dataJson.data.stations} />
    </div>
  );
}
