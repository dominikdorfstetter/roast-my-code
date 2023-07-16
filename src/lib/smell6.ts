import { UserStatus } from '../types';

function isUserNotOnline(status: UserStatus): boolean {
  console.log('checking user status' + status);
  return status !== 'online';
}

export function smell6(): void {
  const status: UserStatus = 'offline';

  if (isUserNotOnline(status)) {
    console.log('user is not online');
  }
}
