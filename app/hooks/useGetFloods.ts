import { useCallback, useEffect, useState } from 'react';

const useGetFloods = (severityLevel: number, limit = 4) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<{
    items: [
      {
        id: string;
        description: string;
        severityLevel: 1 | 2 | 3 | 4 | 5;
        severity: string;
        floodAreaID: string;
      },
    ];
  }>();

  const getFloodData = useCallback(async () => {
    try {
      setIsLoading(true);
      setData(undefined);
      const response = await fetch(
        `https://environment.data.gov.uk/flood-monitoring/id/floods?min-severity=${severityLevel}&_limit=${limit}`,
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [severityLevel, limit]);

  useEffect(() => {
    getFloodData();
  }, [getFloodData]);

  return {
    isLoading,
    floods: data?.items || [],
  };
};

export { useGetFloods };
