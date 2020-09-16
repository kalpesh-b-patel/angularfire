import {createAction, props} from '@ngrx/store';
import { UserModel } from '../../models/user.model';

export const login = createAction('[Login sucess] Login', props<{
  user: UserModel
}>());
export const logout = createAction('[Logout sucess] Logout');
