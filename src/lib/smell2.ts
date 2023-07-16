type User = {
  userName: string;
  userLastName: string;
  userAge: number;
};

export function printUser(user: User): void {
  console.log(`${user.userName} ${user.userLastName} (${user.userAge})`);
}

printUser({
  userName: 'John',
  userLastName: 'Doe',
  userAge: 30,
});
