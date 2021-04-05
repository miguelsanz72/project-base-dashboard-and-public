import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '@core';
import { TUserRole } from '@models';
import { Store } from '@ngrx/store';
import { SidebarModel } from '@theme/models/sidebar.model';
import { AppState } from 'app/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { menuAdmin, menuClient, menuUser } from './data-sidebar';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnDestroy {
    sidebar: SidebarModel[] = [];
    private _unsubscribeAll: Subject<any>;

    constructor(public _authService: AuthService, private store: Store<AppState>) {
        this._unsubscribeAll = new Subject();
        this.store
            .select('USER')
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe({
                next: ({ userOrg }) => {
                    if (!userOrg) return;
                    const role: TUserRole = userOrg.role;

                    switch (role) {
                        case 'admin':
                            this.sidebar = menuAdmin;
                            break;
                        case 'superAdmin':
                            this.sidebar = menuAdmin;
                            break;
                        case 'user':
                            this.sidebar = menuUser;
                            break;
                        case 'client':
                            this.sidebar = menuClient;
                            break;
                        default:
                            this.sidebar = menuUser;
                            break;
                    }
                },
            });
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
