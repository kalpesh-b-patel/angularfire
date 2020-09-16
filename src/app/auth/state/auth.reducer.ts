import { createReducer, on, createSelector, createFeatureSelector } from '@ngrx/store';
import * as actions from './auth.actions';
import { UserModel } from '../../models/user.model';

export const key = 'auth';

export interface AuthState {
  user: UserModel;
}

export const initialState: AuthState = {
  user: undefined
  // user: {
  //   uid: '',
  //   displayName: '',
  //   email: ''
  // }
};

export const reducer = createReducer(
  initialState,
  on(actions.login, (state, action) => {
    return {
      ...state,
      user: action.user
    };
  }),
);

export const selectAuthState = createFeatureSelector<AuthState>(key);

export const selectDisplayName = createSelector(
  selectAuthState,
  (auth) => auth.user?.displayName
);
