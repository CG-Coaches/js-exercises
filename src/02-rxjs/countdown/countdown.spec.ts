import { TestScheduler } from 'rxjs/testing';

import { countdown$ } from './countdown';

describe.skip('countdown$', () => {

  const assertion = (actual: number, expected: number) => {
    expect(actual).toEqual(expected);
  };

  test.each`
    from | period | marbles | values
    ${0} | ${1000} | ${'|'} | ${{}}
    ${0} | ${500} | ${'|'} | ${{}}
    ${1} | ${1000} | ${'1s (a|)'} | ${{ a: 1}}
    ${2} | ${500} | ${'500ms a 499ms (b|)'} | ${{a: 2, b: 1}}
    ${3} | ${750} | ${'750ms a 749ms b 749ms (c|)'} | ${{a: 3, b: 2, c: 1 }}
  `('it must countdown from $from with an interval period of $period', ({from, period, marbles, values}) => {
    const scheduler = new TestScheduler(assertion);
    scheduler.run((helpers) => {
      const { expectObservable } = helpers;
      expectObservable(countdown$(from, period, scheduler)).toBe(marbles, values);
    });
  });
});
