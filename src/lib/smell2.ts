type User = {
  userName: string;
  userLastName: string;
  userAge: number;
};

export const print = (user: User): void => {
  console.log(`${user.userName} ${user.userLastName} (${user.userAge})`);
};
