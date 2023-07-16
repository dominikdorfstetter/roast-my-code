export type User = {
  name: string;
  lastName?: string;
  age?: number;
  status?: UserStatus;
};

export type UserStatus = 'online' | 'offline';
