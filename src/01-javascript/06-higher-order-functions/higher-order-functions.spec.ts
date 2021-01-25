import { greaterThan } from './higher-order-functions';

describe('higher order functions', () => {
  test.each`
  n | m | greater
  ${1} | ${0} | ${false}
  ${1} | ${1} | ${false}
  ${1} | ${2} | ${true}
  ${2} | ${2} | ${false}
  ${2} | ${3} | ${true}
  `('$m is greater than $n: $greater', ({ n, m, greater }) => {
    expect(greaterThan(n)(m)).toBe(greater);
  });
});
