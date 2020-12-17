import { add, mod } from './calc';

describe('calc', () => {

  describe('add', () => {
    it('must add a and b and return the sum', () => {
      const sum = add(1, 1);
      expect(sum).toEqual(2);
    });
  });

  describe('mod', () => {
    it('must return the modulus', () => {
      // TODO fix this test
      expect(mod(10, 2)).toEqual(0);
      expect(mod(5, 2)).toEqual(0);
      expect(mod(20, 3)).toEqual(0);
    });
  });

});
