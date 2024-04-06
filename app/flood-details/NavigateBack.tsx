'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const Back = () => {
  const navigate = useRouter();
  return (
    <Button onClick={() => navigate.back()} variant="outline">
      Back
    </Button>
  );
};

export { Back };
