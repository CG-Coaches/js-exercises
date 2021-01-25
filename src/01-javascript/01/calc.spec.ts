import { add, mod } from './calc';

describe('calc', () => {

  describe('add', () => {
    it('must add a and b and return the sum', () => {
      expect(add(1, 2)).toEqual(3);
      expect(add(-1, 1)).toEqual(0);
      expect(add(0, 1)).toEqual(1);
      expect(add(-1, -1)).toEqual(-2);
    });
  });

  describe('mod', () => {
    it('must return the modulus', () => {
      expect(mod(10, 2)).toEqual(0);
      expect(mod(5, 2)).toEqual(1);
      expect(mod(20, 12)).toEqual(8);
    });
  });

});
