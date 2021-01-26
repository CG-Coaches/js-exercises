import { NEVER, Observable, Subject } from 'rxjs';

import { Action } from '../../model/action.model';

/**
 * This represents a stream of actions that can be pushed,
 * and that can be subscribed to.
 */
export class ActionStream {

  private actions$ = new Subject<Action>();

  dispatch(action: Action): void {
    // TODO push an action to the actions$ stream
  }

  select<T = any>(): Observable<Action<T>> {
    return this.actions$.asObservable();
  }

  selectAction<T = any>(type: string): Observable<Action<T>> {
    // TODO return only the actions of a certain type
    return NEVER;
  }
}
