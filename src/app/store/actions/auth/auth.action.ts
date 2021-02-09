import { IUserAuth, RespApi, RespApiAuth } from '@models';
import { createAction, props } from '@ngrx/store';

export const register = createAction('[AUTH] User Register', props<{ user: IUserAuth }>());

export const activateAccount = createAction('[AUTH] User Activate Account', props<{ token: string }>());

export const login = createAction('[AUTH] User Login', props<{ user: IUserAuth }>());

export const loadUser = createAction('[AUTH] User Load', props<{ data: RespApiAuth }>());
