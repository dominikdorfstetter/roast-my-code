/**
 * Solution 1
 *
 * We always read more code than we write.
 * It is important that the code we write is readable and searchable.
 *
 * Use searchable names!
 * No magic numbers!
 */

// Declare them as capitalized named constants.
const MILLISECONDS_PER_HOUR = 60 * 60 * 1000; // 36000000

function restart() {
  console.log('called restart');
}

export function smell1Solution(): void {
  setTimeout(restart, MILLISECONDS_PER_HOUR);
}

smell1Solution();
