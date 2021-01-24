import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { systemAnimations } from '@theme/animations';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  animations: systemAnimations,
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup;
  token: string;
  accountVerifing: boolean;
  title: string;
  loading: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private translate: TranslatePipe
  ) {
    this.title = this.translate.transform('AUTH.MESSAGE_VERIFY_ACCOUNT');
    this.token = '...';
    this.accountVerifing = false;

    this.loading = false;
    this.resetPasswordForm = this.formBuilder.group({
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  resetPassword() {
    if (this.resetPasswordForm.invalid) return;

    const { password } = this.resetPasswordForm.value;

    console.log(password);
  }
}
