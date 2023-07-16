/**
 * Solution6
 *
 * Avoiding negative conditionals is bad practice.
 */
import { UserStatus } from '../types';

function isUserOnline(status: UserStatus): boolean {
  console.log('checking user status' + status);
  return status === 'online';
}

export function smell6Solution(): void {
  const status: UserStatus = 'offline';

  if (!isUserOnline(status)) {
    console.log('user is not online');
  }
}
