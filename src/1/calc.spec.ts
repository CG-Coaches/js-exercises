import { add } from './calc';

describe('1 - calc', () => {

  it('must add a and b and return the sum', () => {
    const sum = add(1, 1);
    expect(sum).toEqual(2);
  });

});
