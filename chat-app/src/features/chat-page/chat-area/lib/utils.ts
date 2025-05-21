export function toReadableDate(date: string): string {
  return new Date(date).toLocaleString('en-US', {day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit'});
}