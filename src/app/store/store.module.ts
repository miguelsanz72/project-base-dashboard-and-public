import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { storeFreeze } from 'ngrx-store-freeze';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';

import { environment } from 'environments/environment';
import { reducers, effects, CustomSerializer } from 'app/store';

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];

@NgModule({
    imports: [
        StoreModule.forRoot(reducers, {
            metaReducers,
            runtimeChecks: {
                strictActionImmutability: true,
                strictStateImmutability: true,
            },
        }),

        EffectsModule.forRoot(effects),
        !environment.production ? StoreDevtoolsModule.instrument() : [],

        StoreRouterConnectingModule.forRoot(),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: environment.production, // Restrict extension to log-only mode
        }),
    ],

    providers: [
        {
            provide: RouterStateSerializer,
            useClass: CustomSerializer,
        },
    ],
})
export class AppStoreModule {}
