import {TestScheduler} from "rxjs/testing";
import {BikeCarService} from "./switchMap-vs-mergeMap";
import {Observable} from "rxjs";

describe.skip('switchMap-vs-mergeMap', () => {
  let testScheduler: TestScheduler;

  beforeEach(() => {
    testScheduler=  new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  test('I can only perform bike or car actions', () => {
    testScheduler.run(helpers => {
      const {cold, expectObservable, flush} = helpers;
      const carValues = {G: 'get in the Car', D: 'Drive', S: 'steer'}
      const bikeValues = {O: 'On the bike', P: 'Pedal', T: 'turn'}

      const bike$ = cold('O-P-P-T-P-P-T-|', bikeValues);
      const car$ = cold('G-D-D-S-D-D-S-|', carValues);
      const service = new BikeCarService(bike$, car$);

      const actionStream = 'B------C--B-|'
      const resultStream = 'O-P-P-TG-DO-P-P-T-P-P-T-|'

      const actions$: Observable<'bike' | 'car'> = cold(actionStream, {
        B: 'bike', C: 'car'
      })

      expectObservable(service.bikeOrDriveCar(actions$)).toBe(resultStream, {...carValues, ...bikeValues});

      flush();
    });
  });

  test('I drive the car and my friend drive the bike', () => {
    testScheduler.run(helpers => {
      const {cold, expectObservable, flush} = helpers;
      const carValues = {G: 'get in the Car', D: 'Drive', S: 'steer'}
      const bikeValues = {O: 'On the bike', P: 'Pedal', T: 'turn'}

      const bike$ = cold('O-P-T-|', bikeValues);
      const car$ = cold('G', carValues);
      const service = new BikeCarService(bike$, car$);

      const actionStream = 'B---C|'
      const resultStream = 'O-P-(TG)'

      const actions$: Observable<'bike' | 'car'> = cold(actionStream, {
        B: 'bike', C: 'car'
      })

      expectObservable(service.bikeAndDriveCar(actions$)).toBe(resultStream, {...carValues, ...bikeValues});

      flush();
    });
  });
})

