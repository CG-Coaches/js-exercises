import { callSetTimeout } from './set-timeout';

jest.useFakeTimers();

describe.skip('setTimeout', () => {
  test.each`
  t
  ${1000}
  ${0}
  `('call setTimeout after $t seconds', ({ t }) => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    callSetTimeout(t);
    jest.runAllTimers();
    // TODO guess the nth calls...
    expect(consoleSpy).toHaveBeenNthCalledWith(0, 'b');
    expect(consoleSpy).toHaveBeenNthCalledWith(0, 'a');
  });
})
