import { IUser, userDefault } from '@models';
import { createReducer, on } from '@ngrx/store';
import * as actions from '@actions';

export interface AuthState {
    token: string | null;
    userOrg: IUser | null;
}

export const authInitialState: AuthState = {
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

export function authReducer(state: any, action: any) {
    return _authReducer(state, action);
}
