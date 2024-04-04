'use client';
import { useGetFloods } from '@/app/hooks/useGetFloods';
import { Slider } from '@/components/ui/slider';
import { useState } from 'react';
import { SeverityCard } from '../SeverityCard';

const SeverityOverview = () => {
  const [severitLevel, setSeverityLevel] = useState([1]);
  const { floods } = useGetFloods(severitLevel[0], 6);

  return (
    <div className="mt-28">
      <h2 className="text-4xl mt-6 font-bold mb-10">
        Current UK flooding - Severity level: {severitLevel}
      </h2>
      <Slider
        inverted
        max={3}
        min={1}
        defaultValue={[1]}
        value={severitLevel}
        onValueChange={(e) => setSeverityLevel(e)}
        className="mb-10"
      />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {floods.length === 0 && (
          <div className="text-2xl mt-6 font-bold mb-10">
            No data to display
          </div>
        )}
        {floods.map((flood) => (
          <SeverityCard
            key={flood.id}
            title={flood.severity}
            description={flood.description}
            severitLevel={flood.severityLevel}
          />
        ))}
      </div>
    </div>
  );
};

export { SeverityOverview };
