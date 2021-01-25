import {TestScheduler} from 'rxjs/testing';

import {MappingService} from './map-vs-mapTo';
import {delay, tap} from 'rxjs/operators';


describe('map-vs-mapTo', () => {
  let testScheduler: TestScheduler;
  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

  });

  it('must return last index', () => {
    testScheduler.run(helpers => {
      const {cold, expectObservable, flush} = helpers;
      const service = new MappingService();
      const a$ = cold('a|', {a: 0});
      expectObservable(service.mapToLastIndex$(a$)).toBe('a|', {
        a: 1,
      });

      const ab$ = cold('ab', {a: 0, b: 1});
      expectObservable(service.mapToLastIndex$(ab$)).toBe('ab', {
        a: 1,
        b: 1,
      });

      flush();
    });
  });

  it('must return last index after adding a new one', () => {
    testScheduler.run(helpers => {
      const {cold, expectObservable, flush} = helpers;
      const service = new MappingService();
      const ab$ = cold('ab', {a: 0, b: 1});
      const obs$ = service.mapToLastIndex$(ab$).pipe(
        tap((i) => {
          if (i === 1) {
            service.addNewIndex(2);
          }
        }),
      );
      expectObservable(obs$).toBe('ab', {
        a: 1,
        b: 2,
      });
    });
  });
});
