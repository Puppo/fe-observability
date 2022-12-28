import { format } from 'date-fns';

/**
 * @param time - time in milliseconds
 * @param timeFormat - time format
 * @returns formatted time
 * @example
 * <TimeFormat time={123456789} timeFormat="H:mm:ss" />
 * // => 34:17:36
 * @example
 * <TimeFormat time={123456789} timeFormat="mm:ss" />
 * // => 2076:36
 */
interface TimeFormatProps {
  time: number;
  timeFormat?: string;
}

export function TimeFormat({ time, timeFormat = 'H:mm:ss' }: TimeFormatProps) {
  const timeDate = new Date(time);
  const timeZone = timeDate.getTimezoneOffset();
  timeDate.setMinutes(timeDate.getMinutes() + timeZone);
  return <>{format(timeDate, timeFormat)}</>;
}
