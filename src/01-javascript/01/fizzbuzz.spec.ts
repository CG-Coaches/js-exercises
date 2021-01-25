import { fizzbuzz } from './fizzbuzz';

describe('fizzbuzz', () => {
  test.each`
  n | output
  ${1} | ${'1'}
  ${2} | ${'2'}
  ${3} | ${'Fizz'}
  ${5} | ${'Buzz'}
  ${8} | ${'8'}
  ${9} | ${'Fizz'}
  ${10} | ${'Buzz'}
  ${11} | ${'11'}
  ${15} | ${'FizzBuzz'}
  ${30} | ${'FizzBuzz'}
  `('returns $output for the number $n', ({ n, output }) => {
    expect(fizzbuzz(n)).toBe(output);
  });
})
