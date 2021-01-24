import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { systemAnimations } from '@theme/animations';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  animations: systemAnimations,
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;
  loading = false;
  constructor(private formBuilder: FormBuilder) {
    this.loading = false;
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  forgotPassword() {
    if (this.forgotPasswordForm.invalid) return;

    const { email } = this.forgotPasswordForm.value;

    console.log(email);
  }
}
