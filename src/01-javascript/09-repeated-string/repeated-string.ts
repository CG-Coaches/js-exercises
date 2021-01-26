/**
 * TOPIC: algorithmic thinking
 *
 * Source: https://www.hackerrank.com/challenges/repeated-string/problem
 *
 * There is a string (s) of lowercase English letters that is repeated infinitely many times.
 * Given an integer (n), find and print the number of letter a's
 * in the first "n" letters of the infinite string.
 */
export function repeatedString(s: string, n: number): number {
  let occurrences = 0;

  for (let index = 0; index < n; index++) {
    while (!s[index]) {
      s += s;
    }
    if (s[index] === 'a') {
      occurrences++;
    }
  }

  return occurrences;
}
