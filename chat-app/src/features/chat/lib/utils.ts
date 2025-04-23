import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function toReadableDate(date: string): string {
  return new Date(date).toLocaleString('en-US', {day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit'});
}