import { Observable, interval, SchedulerLike } from 'rxjs';
import { map, take } from 'rxjs/operators';

export function countdown$(from: number, period: number, scheduler?: SchedulerLike): Observable<number> {
  /**
   * TODO return an observable that counts down
   * from the given number with the given interval period (in ms!) between each number
   *
   * Example: from = 3 and period = 1000,
   * then the observable emits: 3 (1s passes...) 2 (1s passes...) 1 (observable completes)
   */
  return interval(period, scheduler).pipe(
    take(from),
    map(tick => from - tick),
  );
}
