import { ActionReducerMap } from '@ngrx/store';
import * as reducers from '@reducers';

export interface AppState {
    UI: reducers.UIState;
    USER: reducers.AuthState;
}

export const appReducers: ActionReducerMap<AppState> = {
    UI: reducers.uiReducer,
    USER: reducers.authReducer,
};
