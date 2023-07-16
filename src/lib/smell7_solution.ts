/**
 * Solution 8
 *
 * Avoid side-effects in your functions
 */

const name = 'Robert C. Martin';

export function toBase64Solution(text: string): string {
  return btoa(text);
}

const encodedName: string = toBase64Solution(name);

console.log(encodedName);
