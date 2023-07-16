import { UserStatus } from '../types';

export function updateUser(
  name: string,
  lastName: string,
  age: number,
  status: UserStatus,
) {
  console.log(`User created: ${name} ${lastName} (${age}) ${status}`);
}

updateUser('Gapur', 'Kassym', 29, 'online');
