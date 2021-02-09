import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

import { TranslatePipe } from '@ngx-translate/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppStoreModule } from './store/store.module';
import { RequestsInterceptorService } from '@core';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        TranslateModule.forRoot(),
        MatSnackBarModule,
        AppStoreModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestsInterceptorService,
            multi: true,
        },
        {
            provide: TranslatePipe,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
