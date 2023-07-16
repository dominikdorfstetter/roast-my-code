function restart(): void {
  console.log('called restart');
}
export function callTimout(): void {
  setTimeout(restart, 36000000);
}

callTimout();
