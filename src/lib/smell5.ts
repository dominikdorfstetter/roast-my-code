import { User } from '../types';

export function createUser(user: User) {
  user.name = user.name || 'User';
  user.lastName = user.lastName || '';
  user.age = user.age || 18;
  user.status = user.status || 'offline';
}

createUser({ age: undefined, lastName: undefined, name: 'Gapur' });
