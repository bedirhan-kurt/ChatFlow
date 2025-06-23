// Test script for toReadableDate function
import { toReadableDate } from './chat-app/src/shared/lib/utils/toReadableDate';

// Test cases
console.log('Testing toReadableDate function:');

// Test with Firestore timestamp
console.log('\nTest with Firestore timestamp:');
const firestoreTimestamp = { seconds: 1625097600, nanoseconds: 0 }; // July 1, 2021 00:00:00 UTC
console.log(`Input: ${JSON.stringify(firestoreTimestamp)}`);
console.log(`Output: ${toReadableDate(firestoreTimestamp)}`);

// Test with Date object
console.log('\nTest with Date object:');
const dateObject = new Date('2021-07-01T00:00:00Z');
console.log(`Input: ${dateObject}`);
console.log(`Output: ${toReadableDate(dateObject)}`);

// Test with ISO string
console.log('\nTest with ISO string:');
const isoString = '2021-07-01T00:00:00Z';
console.log(`Input: ${isoString}`);
console.log(`Output: ${toReadableDate(isoString)}`);

// Test with null
console.log('\nTest with null:');
console.log(`Input: null`);
console.log(`Output: ${toReadableDate(null)}`);

// Test with undefined
console.log('\nTest with undefined:');
console.log(`Input: undefined`);
console.log(`Output: ${toReadableDate(undefined)}`);

// Test with invalid object
console.log('\nTest with invalid object:');
const invalidObject = { foo: 'bar' } as any;
console.log(`Input: ${JSON.stringify(invalidObject)}`);
console.log(`Output: ${toReadableDate(invalidObject)}`);

// Test with invalid date string
console.log('\nTest with invalid date string:');
const invalidDateString = 'not a date';
console.log(`Input: ${invalidDateString}`);
console.log(`Output: ${toReadableDate(invalidDateString)}`);

// Instructions to run this test:
// 1. Navigate to the project root directory
// 2. Run: npx ts-node test-toReadableDate.ts