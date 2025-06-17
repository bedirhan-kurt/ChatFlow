export function toReadableDate(date: { seconds: number, nanoseconds: number }): string {
  const milliseconds = date.seconds * 1000 + Math.floor(date.nanoseconds / 1_000_000);
  const parsedDate = new Date(milliseconds);

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