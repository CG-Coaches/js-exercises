import { NEVER, Observable } from 'rxjs';

/**
 * This function returns a simple cold observable that completes
 * after returning the value(s) provided.
 *
 * If the value provided is an array, it will emit each item as an observable value.
 */
export function createObservable<T>(value: T): Observable<T> {
  // TODO implement me
  return NEVER;
}
