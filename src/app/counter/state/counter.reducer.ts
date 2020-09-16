import { createReducer, on, Action } from '@ngrx/store';
import * as actions from './counter.actions';

export const initialState = 0;

const reducer = createReducer(
  initialState,
  on(actions.increment, (state) => state + 1),
  on(actions.decrement, (state) => state - 1),
  on(actions.reset, () => 0),
);

export function counterReducer(state: number, action: Action): number {
  return reducer(state, action);
}
