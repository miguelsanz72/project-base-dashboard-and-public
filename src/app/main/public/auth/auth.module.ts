import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { SystemModule } from '@theme/system.module';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from '@components/components.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ActivateAccountComponent } from './activate-account/activate-account.component';
import { ComponentsModuleTheme } from '@theme/components/components.module';
import { StoreModule } from '@ngrx/store';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },

    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
    },
    {
        path: 'activate-account/:token',
        component: ActivateAccountComponent,
    },
    {
        path: 'create-password/:token',
        component: ResetPasswordComponent,
    },
];

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        ForgotPasswordComponent,
        ResetPasswordComponent,
        ActivateAccountComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SystemModule,
        TranslateModule.forChild(),
        ComponentsModule,
        ComponentsModuleTheme,
    ],
})
export class AuthModule {}
