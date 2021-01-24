import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { systemAnimations } from '@theme/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: systemAnimations,
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading: boolean;

  constructor(private formBuilder: FormBuilder) {
    this.loading = false;
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      rememberme: [false],
    });
  }

  ngOnInit(): void {}

  login(): void {
    if (this.loginForm.invalid) return;

    const { email, password } = this.loginForm.value;

    console.log(email);
    console.log(password);
  }
}
