import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { systemAnimations } from '@theme/animations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: systemAnimations,
})
export class RegisterComponent implements OnInit {
  loading = false;
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loading = false;
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      termAndConditions: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  register() {
    if (this.registerForm.invalid) return;

    const { email, password, termAndConditions } = this.registerForm.value;

    console.log(email);
    console.log(password);
    console.log(termAndConditions);
  }

  resendEmailActivateAccount() {}
}
