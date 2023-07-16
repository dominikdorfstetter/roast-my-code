function restart(): void {
  console.log('called restart');
}
export function smell1(): void {
  setTimeout(restart, 36000000);
}
