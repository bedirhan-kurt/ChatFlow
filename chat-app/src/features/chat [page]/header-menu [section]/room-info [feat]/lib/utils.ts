export function toMonthAndYear(date: Date | string | undefined): string {
  if (!date) {
    return 'Invalid date';
  }

  let parsedDate: Date;

  // Handle string date
  if (typeof date === 'string') {
    parsedDate = new Date(date);
  } 
  // Handle a Date object
  else if (date instanceof Date) {
    parsedDate = date;
  }
  else {
    return 'Invalid date format';
  }

  // Check if the date is valid
  if (isNaN(parsedDate.getTime())) {
    return 'Invalid date';
  }

  // Format to show only day and month
  return parsedDate.toLocaleString('en-US', {
    day: 'numeric',
    month: 'short',
    timeZone: 'UTC'
  });
}
