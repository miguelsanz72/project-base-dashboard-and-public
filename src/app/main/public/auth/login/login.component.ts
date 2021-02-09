import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { systemAnimations } from '@theme/animations';
import * as actions from '@actions';
import { AuthStateApp } from '@reducers';
import { IUserAuth, userDefault } from '@models';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: systemAnimations,
})
export class LoginComponent implements OnInit, OnDestroy {
    loginForm: FormGroup;
    suscription: Subscription;
    constructor(private formBuilder: FormBuilder, private store: Store<AuthStateApp>, private router: Router) {
        this.suscription = new Subscription();
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
            rememberme: [false],
        });
    }

    ngOnInit(): void {
        this.suscription = this.store.select('USER').subscribe(({ token }) => {
            if (token !== null) {
                this.router.navigate(['/dashboard']);
            }
        });
    }

    login(): void {
        if (this.loginForm.invalid) return;

        const {
            email: { email },
            password: { password },
        } = this.loginForm.value;
        const user: IUserAuth = {
            email,
            password,
            timeZone: userDefault.timeZone,
        };

        this.store.dispatch(actions.login({ user }));
    }

    ngOnDestroy(): void {
        this.suscription.unsubscribe();
    }
}
