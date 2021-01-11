import { Observable } from 'rxjs';
import { map, mapTo } from 'rxjs/operators';

export class MappingService {

  private readonly indices = [1]; // assume always 1 element for convenience

  get lastIndex(): number {
    return this.indices[this.indices.length - 1];
  }

  addNewIndex(index: number): void {
    this.indices.push(index);
  }

  mapToLastIndex$(stream$: Observable<number>): Observable<number> {
    return stream$.pipe(
      // TODO: note the difference between these two operators
      // mapTo(this.lastIndex),
      map(() => this.lastIndex),
    );
  }
}
