import { IUser, userDefault } from '@models';
import { createReducer, on } from '@ngrx/store';
import * as actions from '@actions';
import { AppState } from '../app.reducer.ts';

export interface IAuthState {
    token: string | null;
    userOrg: IUser | null;
}

export interface AuthStateApp extends AppState {
    USER: IAuthState;
}

export const authInitialState: IAuthState = {
    token: null,
    userOrg: userDefault,
};

const _authReducer = createReducer(
    authInitialState,

    on(actions.loadUser, (state, { data: { token, user } }) => ({
        ...state,
        token,
        userOrg: user,
    }))
);

export function authReducerReducer(state: IAuthState, action: any) {
    return _authReducer(state, action);
}
