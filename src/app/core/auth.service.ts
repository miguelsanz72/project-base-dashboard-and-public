import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespApi, IUserAuth, RespApiAuth, IUser } from '@models';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    ver = '0.10.0';
    urlApi = environment.url_api;
    constructor(private http: HttpClient) {}

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

    saveStorage(token: string, userOrg: IUser): void {
        localStorage.setItem('token', token);
        localStorage.setItem('userOrg', JSON.stringify(userOrg));
    }
}
