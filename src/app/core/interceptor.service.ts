import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import * as actions from '@actions';
import { AppState } from 'app/store';
@Injectable({
    providedIn: 'root',
})
export class RequestsInterceptorService implements HttpInterceptor {
    token: string;

    constructor(private store: Store<AppState>) {
        const token = localStorage.getItem('token');
        if (token) this.token = token;
        else this.token = '';
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.store.dispatch(actions.isLoading());
        if (req.headers.get('activate-accound') || req.headers.get('login-auth') || req.headers.get('registerUser')) {
            return next.handle(req).pipe(
                map((event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                        const {
                            body: { message },
                        } = event;
                        if (message.length > 1) this.store.dispatch(actions.messageAPI({ message }));
                        this.store.dispatch(actions.stopLoading());
                    }
                    return event;
                }),
                catchError(({ error }) => {
                    this.store.dispatch(actions.errorAPI({ error }));
                    this.store.dispatch(actions.stopLoading());
                    return of(error);
                })
            );
        }
        const params = new HttpParams().append('token', this.token);
        const reqClone = req.clone({
            params,
        });

        return next.handle(reqClone).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    const {
                        body: { message },
                    } = event;
                    if (message.length > 1) this.store.dispatch(actions.messageAPI({ message }));
                    this.store.dispatch(actions.stopLoading());
                }
                return event;
            }),
            catchError((error) => {
                this.store.dispatch(actions.errorAPI({ error }));
                this.store.dispatch(actions.stopLoading());
                return of(error);
            })
        );
    }
}
