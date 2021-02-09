import { AuthService } from '@core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as authActions from '@actions';
import { map, mergeMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginEffects {
    activateAccount$ = createEffect((): any =>
        this.actions$.pipe(
            ofType(authActions.login),
            mergeMap(({ user }) => this._authService.login(user).pipe(map((data) => authActions.loadUser({ data }))))
        )
    );

    constructor(private actions$: Actions, private _authService: AuthService) {}
}
