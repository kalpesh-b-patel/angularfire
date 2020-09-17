import { createReducer, on, createSelector, createFeatureSelector } from '@ngrx/store';
import * as actions from './auth.actions';
import { UserModel } from '../../../models/user.model';

export const key = 'auth';

export interface AuthState {
  user: UserModel;
}

export const initialState: AuthState = {
  user: undefined
};

export const reducer = createReducer(
  initialState,
  on(actions.login, (state, action) => {
    return {
      ...state,
      user: action.user
    };
  }),

  on(actions.logout, (state) => {
    return {
        ...state,
        user: undefined
    };
  }),
);

export const selectAuthState = createFeatureSelector<AuthState>(key);

export const selectDisplayName = createSelector(
  selectAuthState,
  (auth) => auth.user?.displayName
);

export const isLoggedIn = createSelector(
  selectAuthState,
  (auth) => !!auth.user
);
