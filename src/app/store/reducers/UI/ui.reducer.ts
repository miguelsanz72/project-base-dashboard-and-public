import { createReducer, on } from '@ngrx/store';
import * as actions from '@actions';
import { AppState } from '@reducers';
import { IErrorApi } from '@models';
import { state } from '@angular/animations';

export interface UIState {
    isLoading: boolean;
    message: string;
    err: IErrorApi | null | undefined;
}

export interface UIStateApp extends AppState {
    UI: UIState;
}

export const initialState: UIState = {
    isLoading: false,
    message: '',
    err: null,
};

const _uiReducer = createReducer(
    initialState,

    on(actions.isLoading, (state) => ({ ...state, isLoading: true })),
    on(actions.stopLoading, (state) => ({
        ...state,
        isLoading: false,
        err: null,
        message: '',
    })),
    on(actions.errorAPI, (state, { error: { message, err } }) => ({
        ...state,
        err,
        message,
    })),
    on(actions.messageAPI, (state, { message }) => ({
        ...state,
        message,
    }))
);

export function uiReducer(state: any, action: any) {
    return _uiReducer(state, action);
}
