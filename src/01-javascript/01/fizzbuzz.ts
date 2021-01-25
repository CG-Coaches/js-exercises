/**
 * Returns the given number itself
 * except if the number is divisible by 3, then return "Fizz" (without the quotes) instead,
 * or if it is divisible by 5, then return "Buzz" instead,
 * and if it is divisible by both 3 and 5, print "FizzBuzz".
 */
export function fizzbuzz(n: number): string {
  if (n % 3 == 0 && n % 5 == 0) {
    return 'FizzBuzz';
  } else if (n % 3 == 0) {
    return 'Fizz';
  } else if (n % 5 == 0) {
    return 'Buzz';
  } else {
    return `${n}`;
  }
}
