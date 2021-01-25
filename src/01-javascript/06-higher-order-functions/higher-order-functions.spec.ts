import { greaterThan, repeat } from './higher-order-functions';

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

  it('must repeat a function N times', () => {
    const f: (i: number) => boolean = jest.fn(greaterThan(3));
    const results = repeat<boolean>(7, f);
    expect(f).toHaveBeenCalledTimes(7);
    expect(results).toEqual([false, false, false, false, true, true, true]);
  });
});
