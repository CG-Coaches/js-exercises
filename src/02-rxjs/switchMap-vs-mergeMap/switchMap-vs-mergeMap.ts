import {Observable} from "rxjs";
import {mergeMap, switchMap} from "rxjs/operators";

export class BikeCarService {
  constructor(private bike$: Observable<string>,
              private car$: Observable<string>) {
  }

  bikeOrDriveCar(actions$: Observable<'bike' | 'car'>) {
    return actions$.pipe(
      switchMap(action => action === 'bike' ? this.bike$ : this.car$)
    )
  }

  bikeAndDriveCar(actions$: Observable<'bike' | 'car'>) {
    return actions$.pipe(
      mergeMap(action => action === 'bike' ? this.bike$ : this.car$)
    )
  }
}
