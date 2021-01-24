import { ChangeDetectionStrategy, Component, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

export interface IformLogin {
    password: string;
    passwordConfirm: string;
}

@Component({
    selector: 'app-form-password',
    templateUrl: './form-password.component.html',
    styleUrls: ['./form-password.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FormPasswordComponent),
            multi: true,
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => FormPasswordComponent),
            multi: true,
        },
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormPasswordComponent implements OnInit, OnDestroy {
    form: FormGroup;
    subscriptions: Subscription[];
    @Input() showConfirm: boolean;

    get value(): FormPasswordComponent {
        return this.form.value;
    }

    set value(value: FormPasswordComponent) {
        this.form.setValue(value);
        this.onChange(value);
        this.onTouched();
    }

    get passwordControl() {
        return this.form.controls.password;
    }

    get passwordConfirm() {
        return this.form.controls.passwordConfirm;
    }

    constructor(private formBuilder: FormBuilder) {
        this.showConfirm = false;
        this.subscriptions = [];
        this.form = this.formBuilder.group({
            password: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
            passwordConfirm: [''],
        });

        this.subscriptions.push(
            this.form.valueChanges.subscribe((value) => {
                this.onChange(value);
                this.onTouched();
            })
        );
    }

    ngOnInit(): void {
        if (this.showConfirm) {
            this.form.controls.passwordConfirm.setValidators([Validators.required, this.noEqual.bind(this.form)]);
        }
    }

    onChange: any = () => {};
    onTouched: any = () => {};

    registerOnChange(fn: any) {
        this.onChange = fn;
    }

    writeValue(value: any) {
        if (value) {
            this.value = value;
        }

        if (value === null) {
            this.form.reset();
        }
    }

    registerOnTouched(fn: any) {
        this.onTouched = fn;
    }

    validate(_: FormControl) {
        return this.form.valid ? null : { login: { valid: false } };
    }

    noEqual = (control: FormControl) => {
        const password = this.form.get('password')?.value;
        if (control.value !== password) {
            return {
                noIgual: true,
            };
        } else {
            return null;
        }
    };

    ngOnDestroy() {
        this.subscriptions.forEach((s) => s.unsubscribe());
    }
}
