import { Observable } from 'rxjs';
import { filter, map, scan } from 'rxjs/operators';

export function sumOfStrings$(source: Observable<string>): Observable<number> {
  return source.pipe(
    map(x => 0),
    // TODO return the cumulative (numeric) sum of all strings (that are numbers) for each item emitted by the source observable
  );
}
