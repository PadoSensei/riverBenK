import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Waves } from 'lucide-react';

type SeverityCardProps = {
  title: string;
  description: string;
  severitLevel: 1 | 2 | 3 | 4 | 5;
};

const SeverityCard = ({
  title,
  description,
  severitLevel,
}: SeverityCardProps) => {
  const getSeverityColor = (severityLevel: number) => {
    switch (severityLevel) {
      case 1:
        return 'text-red-600';
      case 2:
        return 'text-orange-600';
      case 3:
        return 'text-yellow-600';

      default:
        return 'text-gray-600';
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Waves className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{description}</div>
        <p
          className={`text-small text-muted-foreground ${getSeverityColor(
            severitLevel,
          )} font-semibold`}
        >
          Severity level: {severitLevel}
        </p>
      </CardContent>
    </Card>
  );
};

export { SeverityCard };
