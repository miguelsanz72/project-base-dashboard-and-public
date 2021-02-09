import { AuthService } from '@core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as authActions from '@actions';
import { map, mergeMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class ActivateAccountEffects {
    activateAccount$ = createEffect((): any =>
        this.actions$.pipe(
            ofType(authActions.activateAccount),
            mergeMap(({ token }) =>
                this._authService.activateAccount(token).pipe(map((data) => authActions.loadUser({ data })))
            )
        )
    );

    constructor(private actions$: Actions, private _authService: AuthService) {}
}
