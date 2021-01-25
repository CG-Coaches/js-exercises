/**
 * Returns a function that returns true if a number is greater than the higher-order number.
 */
export function greaterThan(n: number): (m: number) => boolean {
  return (m: number) => m > n;
}
