import { repeatedString } from './repeated-string';

describe('repeatedString', () => {
  test.each`
  s | n | output
  ${'aba'} | ${10} | ${7}
  ${'a'} | ${1000000} | ${1000000}
  ${'abbca'} | ${20} | ${8}
`('must return the number of occurrences of "a" for $s', ({s, n, output}) => {
    expect(repeatedString(s, n)).toBe(output);
  });
});
