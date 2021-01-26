import { createObservable } from './of';
import { TestScheduler } from 'rxjs/testing';

const testScheduler = new TestScheduler((actual, expected) => {
  expect(actual).toEqual(expected);
});

describe('createObservable', () => {
  test.each<any>([
    {
      value: 42,
    },
    {
      value: 'test',
    },
    {
      value: [1, 2, 3],
    }
  ])('must return $value in an observable', ({ value }, done: any) => {
    let index: number = 0;
    const observer = jest.fn((output) => {
      const expectedOutput = Array.isArray(value) ? value[index++] : value;
      expect(output).toBe(expectedOutput);
    });
    testScheduler.run(() => {
      createObservable(value).subscribe(
        observer,
        () => {},
        () => {
          if (Array.isArray(value)) {
            expect(observer).toHaveBeenCalledTimes(value.length);
          } else {
            expect(observer).toHaveBeenCalledTimes(1);
          }
          done();
        },
      );
    });
  });
});
