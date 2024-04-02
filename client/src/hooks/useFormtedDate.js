import { formatDistanceToNow, parseISO } from 'date-fns';
import { he } from 'date-fns/locale';

const useFormatedDate = (dateString) => {
  const date = parseISO(dateString);

  const distanceInWords = formatDistanceToNow(date, { addSuffix: true, locale: he });
  console.log(distanceInWords);

  if (distanceInWords.includes('יום') || distanceInWords.includes('שבוע') || distanceInWords.includes('חודש') || distanceInWords.includes('שנה')) {
    return `${distanceInWords} בשעה ${date.getHours()}:${date.getMinutes()}`;
  }

  return `${distanceInWords} בשעה ${date.getHours()}:${date.getMinutes()}`;
};

export default useFormatedDate;
