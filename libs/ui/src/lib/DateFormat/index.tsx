import { format } from 'date-fns';

interface DateProps {
  date: number | Date | string;
  dateFormat?: string;
}

export function DateFormat({ date, dateFormat = 'dd MMM yyyy' }: DateProps) {
  const dateValue = new Date(date);
  return <>{format(dateValue, dateFormat)}</>;
}
