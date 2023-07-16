/**
 * Solution2
 *
 * Don’t add unneeded context!
 *
 * If your class/type/object name tells you something,
 * don’t repeat it in your variable name.
 */
import { User } from '../types';

export const printSolution = (user: User): void => {
  console.log(`${user.name} ${user.lastName} (${user.age})`);
};
