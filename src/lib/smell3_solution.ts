/**
 * Solution 3
 *
 * Function arguments (2 or fewer ideally)
 *
 * If our functions have more than two arguments,
 * they are trying to do too much. One or two arguments are ideal and easy
 * to test, and three should be avoided if possible.
 */
import { User } from '../types';

export function updateUserSolution(user: User) {
  console.log(
    `User created: ${user.name} ${user.lastName} (${user.age}) ${user.status}`
  );
}

updateUserSolution({
  name: 'Gapur',
  lastName: 'Kassym',
  age: 29,
  status: 'online'
});
