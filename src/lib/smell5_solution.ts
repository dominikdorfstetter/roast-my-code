/**
 * Solution5
 *
 * Set default objects with Object.assign or with spread operator
 */
import { User } from '../types';

export function createUserSolution(user: User): User {
  return {
    name: 'User',
    lastName: '',
    age: 18,
    ...user,
  };
}

createUserSolution({ name: 'Gapur' });
