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

const restart = () => {
  console.log('called restart');
};
export const smell1Solution = () => {
  setTimeout(restart, MILLISECONDS_PER_HOUR);
};
