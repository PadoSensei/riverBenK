'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const Back = ({ backTo }: { backTo?: string }) => {
  const navigate = useRouter();

  const handleBack = () =>
    backTo ? navigate.replace(backTo) : navigate.back();

  return <Button onClick={handleBack}>Back</Button>;
};

export { Back };
