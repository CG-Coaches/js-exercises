export function sumOfStrings(source: string[]): number {
  /**
   * TODO: calculate the sum of all numbers in the given array of strings
   */
  // return 0;
  return source
    .map(x => parseInt(x))
    .filter(x => !isNaN(x))
    .reduce((x, y) => x + y, 0);
}
