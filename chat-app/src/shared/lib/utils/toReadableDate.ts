export function toReadableDate(date: { seconds: number, nanoseconds: number } | Date | string | null | undefined): string {
  if (!date) {
    return 'Invalid date';
  }

  let parsedDate: Date;

  // Handle Firestore timestamp
  if (typeof date === 'object' && 'seconds' in date && 'nanoseconds' in date) {
    const milliseconds = date.seconds * 1000 + Math.floor(date.nanoseconds / 1_000_000);
    parsedDate = new Date(milliseconds);
  } 
  // Handle Date object
  else if (date instanceof Date) {
    parsedDate = date;
  } 
  // Handle ISO string
  else if (typeof date === 'string') {
    parsedDate = new Date(date);
  } 
  else {
    return 'Invalid date format';
  }

  // Check if the date is valid
  if (isNaN(parsedDate.getTime())) {
    return 'Invalid date';
  }

  return parsedDate.toLocaleString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'UTC'
  });
}
