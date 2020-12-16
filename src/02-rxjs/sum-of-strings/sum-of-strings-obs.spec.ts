import { from } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { sumOfStrings$ } from './sum-of-strings-obs';

describe('sumOfStrings$', () => {

  const assertion = (actual: number, expected: number) => {
    expect(actual).toEqual(expected);
  };

  test.each`
    source | marbles | values
    ${from([])} | ${'|'} | ${{}}
    ${from(['1'])} | ${'(a|)'} | ${{ a: 1 }}
    ${from(['1', '1'])} | ${'(ab|)'} | ${{ a: 1, b: 2 }}
    ${from(['1', '2'])} | ${'(ab|)'} | ${{ a: 1, b: 3 }}
    ${from(['1', '', '107', 'chicken', '0'])} | ${'(abc|)'} | ${{ a: 1, b: 108, c: 108 }}
  `('it must return the sum of all numbers in the source observable', ({source, marbles, values}) => {
    const scheduler = new TestScheduler(assertion);
    scheduler.run((helpers) => {
      const { expectObservable } = helpers;
      expectObservable(sumOfStrings$(source)).toBe(marbles, values);
    });
  });
});
