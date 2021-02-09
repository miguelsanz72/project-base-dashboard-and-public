import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AlertsService } from '@services';
import { IAuthState } from 'app/store';
import * as actions from '@actions';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
    selector: 'app-activate-account',
    templateUrl: './activate-account.component.html',
    styleUrls: ['./activate-account.component.scss'],
})
export class ActivateAccountComponent implements OnInit, OnDestroy {
    private _unsubscribeAll: Subject<any>;
    constructor(private activateRoute: ActivatedRoute, private router: Router, private store: Store<IAuthState>) {
        this._unsubscribeAll = new Subject();
        this.activateRoute.params.subscribe((params) => {
            const token: string = params.token;
            this.store.dispatch(actions.activateAccount({ token }));
            this.store
                .select('token')
                .pipe(takeUntil(this._unsubscribeAll))
                .subscribe({
                    next: (token) => {
                        if (token !== null) {
                            this.router.navigate(['/dashboard']);
                        }
                    },
                });
        });
    }

    ngOnInit(): void {}

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
