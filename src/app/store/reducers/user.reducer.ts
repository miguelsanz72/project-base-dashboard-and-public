import { userMDefault, UserModel } from '@models/index';
import { Action } from '@ngrx/store';

const initialState = userMDefault;

export function userReducer(state: UserModel = initialState, action: any) {
    console.log(action.type, state);

    switch (action.type) {
        case 'UPDATE':
            return (state = action.payload);

        default:
            return state;
    }
}
