import { callSetTimeout } from './set-timeout';

jest.useFakeTimers();

describe('setTimeout', () => {
  test.each`
  t
  ${1000}
  ${0}
  `('call setTimeout after $t seconds', ({ t }) => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    callSetTimeout(t);
    jest.runAllTimers();
    expect(consoleSpy).toHaveBeenNthCalledWith(1, 'b');
    expect(consoleSpy).toHaveBeenNthCalledWith(2, 'a');
  });
})
