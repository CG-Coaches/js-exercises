describe('strictEqual', () => {
  test('a string should be strict equal', () => {
    expect('string').toBe('string');
  })

  test('a number is strict equal', () => {
    expect(123).toBe(123)
  });

  test('an map over an array is not strict equal', () => {
    const array = [1, 2, 3]

    expect(array.map(value => value)).not.toBe(array);
    expect(array.map(value => value)).toEqual(array);
  });


  test('an object is not strict equal', () => {
    const name = 'my name'

    expect( { name }).not.toBe( { name });
    expect( { name }).toEqual( { name });
  });

  test('the values inside an object are strict equal', () => {
    const name = 'my name'

    expect( { name }.name).toBe(  name );
  })


});
