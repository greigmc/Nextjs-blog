import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(parseISO('2019-02-11T14:00:00'), 'MM/dd/yyyy')}</time>;
}