import { sumOfStrings } from './sum-of-strings';

describe('sumOfStrings', () => {
  test.each`
    source | expected
    ${[]} | ${0}
    ${['1']} | ${1}
    ${['1', '1']} | ${2}
    ${['1', '2']} | ${3}
    ${['1', '', '107', 'chicken', '0']} | ${108}
  `('must return $expected when sum of numbers in $source is calculated', ({source, expected}) => {
    const originalSource = [...source];
    expect(sumOfStrings(source)).toBe(expected);
    expect(source).toEqual(originalSource);
  });
});
