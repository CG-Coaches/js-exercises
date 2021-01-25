import { lexicalScoping } from './scope';

describe('scope', () => {
  it('must multiply with 1, 2, and 3', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    lexicalScoping(2);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, 2);
    expect(consoleSpy).toHaveBeenNthCalledWith(2, 4);
    expect(consoleSpy).toHaveBeenNthCalledWith(3, 6);
  });
})
