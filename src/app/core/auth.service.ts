import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespApi, IUserAuth, RespApiAuth, IUser } from '@models';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as actions from '@actions';
import * as crypto from 'crypto-js';
import { Store } from '@ngrx/store';
import { AppState } from 'app/store';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    ver = '0.1.0';
    urlApi = environment.url_api;
    secret = environment.SEED;
    constructor(private http: HttpClient, private store: Store<AppState>) {
        this.loadUser();
    }

    registerUserNormal(user: IUserAuth): Observable<RespApi> {
        const headers = new HttpHeaders({
            registerUser: 'registerUser',
        });
        const url = `${this.urlApi}/addUser`;
        return this.http.post(url, user, { headers }).pipe(
            map((resp: any) => {
                return resp;
            })
        );
    }

    activateAccount(token: string): Observable<RespApiAuth> {
        const url = `${this.urlApi}/activate-accound?token=${token}`;
        const headers = new HttpHeaders({
            'activate-accound': 'activate-accound',
        });
        return this.http.get(url, { headers }).pipe(
            map((resp: any) => {
                const userOrg = resp.user;
                const token = resp.token;
                this.saveStorage(token, userOrg);
                return resp;
            })
        );
    }

    login(user: IUserAuth): Observable<RespApiAuth> {
        const headers = new HttpHeaders({
            'login-auth': 'login-auth',
        });

        const url = `${this.urlApi}/login`;
        return this.http.post(url, user, { headers }).pipe(
            map((resp: any) => {
                const userOrg = resp.user;
                const token = resp.token;
                this.saveStorage(token, userOrg);
                return resp;
            })
        );
    }

    saveStorage(token: string, user: IUser): void {
        const userEncripted = this.encryptData(JSON.stringify(user));
        localStorage.setItem('token', token);
        localStorage.setItem('user', userEncripted);
        this.loadUser();
    }
    loadUser() {
        const token = localStorage.getItem('token');
        const userS = localStorage.getItem('userOrg');

        if (token && userS) {
            const userDecryp = this.decryptData(userS);
            const user: any = JSON.parse(userDecryp);
            const data: any = {
                user,
                token,
            };
            this.store.dispatch(actions.loadUser({ data }));
        }
    }
    encryptData(userOrg: string) {
        try {
            return crypto.AES.encrypt(JSON.stringify(userOrg), this.secret).toString();
        } catch (e) {
            console.log(e);
            return e;
        }
    }

    decryptData(userOrg: string) {
        try {
            const bytes = crypto.AES.decrypt(userOrg, this.secret);
            if (bytes.toString()) {
                return JSON.parse(bytes.toString(crypto.enc.Utf8));
            }
            return userOrg;
        } catch (e) {
            console.log(e);
            return e;
        }
    }
}
