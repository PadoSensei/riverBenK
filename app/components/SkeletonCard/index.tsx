import { Skeleton } from '@/components/ui/skeleton';

function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[350px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[275px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}

export default SkeletonCard;
