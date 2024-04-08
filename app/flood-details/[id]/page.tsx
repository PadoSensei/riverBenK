import { Back } from '@/app/components/NavigateBack';
import React from 'react';

type FloodDetailsProps = {
  id: string;
};

type FloodData = {
  county: string;
  currentWarning: {
    '@id': string;
    description: string;
    eaAreaName: string;
    eaRegionName: string;
    floodArea: string;
    floodAreaID: string;
    isTidal: boolean;
    message: string;
    severity: string;
    severityLevel: number;
    timeMessageChanged: string;
    timeRaised: string;
    timeSeverityChanged: string;
    type: string;
  };
  description: string;
  eaAreaName: string;
  floodWatchArea: string;
  fwdCode: string;
  label: string;
  lat: number;
  long: number;
  notation: string;
  polygon: string;
  quickDialNumber: string;
  riverOrSea: string;
  type: string[];
};

const FloodDetails = async ({ params }: { params: FloodDetailsProps }) => {
  const response = await fetch(
    `https://environment.data.gov.uk/flood-monitoring/id/floodAreas/${params.id}`,
  );

  const data: { items: FloodData } = await response.json();

  return (
    <div>
      <h1 className="text-5xl font-bold tracking-tight">{data.items.county}</h1>
      <h2 className="text-2xl mt-5">{data.items.description}</h2>
      <h3 className="text-lg text-slate-600 mt-5">{data.items.description}</h3>
      <p className="mt-5">{data.items.currentWarning.message}</p>
      <div className="flex justify-end mt-5">
        <Back backTo="/" />
      </div>
    </div>
  );
};

export default FloodDetails;
