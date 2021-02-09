import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUserAuth, userDefault } from '@models';
import { AlertsService } from '@services';
import { systemAnimations } from '@theme/animations';
import { AuthService } from 'app/core/auth.service';
@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    animations: systemAnimations,
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private _apiAuthService: AuthService,
        private router: Router,
        private _alertsService: AlertsService
    ) {
        this.registerForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
            termAndConditions: ['', Validators.required],
        });
    }

    ngOnInit(): void {}

    register() {
        if (this.registerForm.invalid) return;
        const {
            email: { email },
            password: { password },
        } = this.registerForm.value;
        const data: IUserAuth = {
            email,
            password,
            timeZone: userDefault.timeZone,
        };
        this._apiAuthService.registerUserNormal(data).subscribe(({ message }) => {
            this._alertsService.messages('', 'success', message);
            this.router.navigate(['/auth/login']);
        });
    }

    resendEmailActivateAccount() {}
}
