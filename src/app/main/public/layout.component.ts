import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AlertsService } from '@services';
import { AppState } from 'app/store';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, OnDestroy {
    loading: boolean;
    suscription: Subscription;
    constructor(private store: Store<AppState>, private _alertsService: AlertsService) {
        this.loading = false;
        this.suscription = new Subscription();
    }

    ngOnInit(): void {
        this.suscription = this.store.select('UI').subscribe((ui) => {
            this.loading = ui.isLoading;
            if (ui.err !== null) this._alertsService.messages('', 'error', ui.message, ui.err?.name);
            else if (ui.message.length > 1) this._alertsService.messageSnackBar(ui.message, '😁', 4000);
        });
    }

    ngOnDestroy() {
        this.suscription.unsubscribe();
    }
}
