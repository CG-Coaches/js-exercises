import { TestScheduler } from 'rxjs/testing';
import { take } from 'rxjs/operators';

import { ActionStream } from './actions';

const testScheduler = new TestScheduler((actual, expected) => {
  expect(actual).toEqual(expected);
});

describe('ActionStream', () => {
  it('must be able to dispatch and select actions', (done) => {
    testScheduler.run(helpers => {
      const actions = [
        {
          type: 'ADD_TO_SHOPPING_CART',
          payload: 12345,
        },
        {
          type: 'ADD_TO_SHOPPING_CART',
          payload: 54321,
        },
      ]
      const actionStream = new ActionStream();
      let subIndex = 0;
      actionStream.selectAction('ADD_TO_SHOPPING_CART')
        .pipe(take(2))
        .subscribe(
          (action) => {
            expect(action).toEqual(actions[subIndex++]);
          },
          () => {},
          done,
          )
      actionStream.dispatch(actions[0]);
      actionStream.dispatch(actions[1]);
    });
  })
});
