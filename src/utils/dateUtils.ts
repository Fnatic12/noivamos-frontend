
import { format, differenceInDays } from 'date-fns';

export const processWeddingDate = (weddingDate: string): { daysRemaining: number; formattedDate: string } => {
  let daysRemaining = 0;
  let formattedDate = '';
  
  try {
    // Try to parse the date in different formats
    const datePattern = /(\d{2})\/(\d{2})\/(\d{4})/;
    const match = weddingDate.match(datePattern);
    
    if (match) {
      const [_, day, month, year] = match;
      const parsedDate = new Date(`${year}-${month}-${day}`);
      daysRemaining = differenceInDays(parsedDate, new Date());
      formattedDate = format(parsedDate, 'dd/MM/yyyy');
    } else {
      formattedDate = weddingDate;
    }
  } catch (error) {
    console.error('Error parsing wedding date:', error);
    formattedDate = weddingDate;
  }

  return {
    daysRemaining,
    formattedDate
  };
};
