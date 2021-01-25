/**
 * Returns a function that returns true if a number is greater than the higher-order number.
 */
export function greaterThan(n: number): (m: number) => boolean {
  return (m: number) => m > n;
}

/**
 * Executes the given function "n" times and returns the results as an array.
 */
export function repeat<T = any>(n: number, f: (i: number) => T): T[] {
  const results: T[] = [];
  for (let i = 0; i < n; i++) {
    results.push(f(i));
  }
  return results;
}
