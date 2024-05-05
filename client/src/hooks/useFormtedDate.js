import { formatDistanceToNow, parseISO } from 'date-fns';
import { he } from 'date-fns/locale';

const useFormatedDate = (dateString) => {
  try {
    if (typeof dateString !== 'string') {
      return '';
    }

    const date = parseISO(dateString);

    const distanceInWords = formatDistanceToNow(date, { addSuffix: true, locale: he });

    return distanceInWords;
  } catch (error) {
    return 'תאריך לא זמין';
  }
};

export default useFormatedDate;