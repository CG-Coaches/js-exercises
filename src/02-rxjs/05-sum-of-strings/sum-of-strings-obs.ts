import { Observable } from 'rxjs';
import { filter, map, scan } from 'rxjs/operators';

export function sumOfStrings$(source: Observable<string>): Observable<number> {
  return source.pipe(
    map(x => parseInt(x, 10)),
    filter(x => ! isNaN(x)),
    scan((x: number, y: number) => x + y),
  );
}
