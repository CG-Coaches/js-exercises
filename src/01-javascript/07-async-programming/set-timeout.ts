export function callSetTimeout(timeout = 1000) {
  setTimeout(() => console.log('a'), timeout);
  console.log('b');
}
