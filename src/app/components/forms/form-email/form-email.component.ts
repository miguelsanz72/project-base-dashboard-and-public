import { ChangeDetectionStrategy, Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-form-email',
    templateUrl: './form-email.component.html',
    styleUrls: ['./form-email.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FormEmailComponent),
            multi: true,
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => FormEmailComponent),
            multi: true,
        },
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormEmailComponent implements OnDestroy {
    form: FormGroup;
    subscriptions: Subscription[];

    get value(): FormEmailComponent {
        return this.form.value;
    }

    set value(value: FormEmailComponent) {
        this.form.setValue(value);
        this.onChange(value);
        this.onTouched();
    }

    get emailControl() {
        return this.form.controls.email;
    }

    constructor(private formBuilder: FormBuilder) {
        this.subscriptions = [];
        this.form = this.formBuilder.group({
            email: ['', Validators.compose([Validators.required, Validators.email])],
        });
        this.subscriptions.push(
            this.form.valueChanges.subscribe((value) => {
                this.onChange(value);
                this.onTouched();
            })
        );
    }

    ngOnDestroy() {
        this.subscriptions.forEach((s) => s.unsubscribe());
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
        return this.form.valid ? null : { email: { valid: false } };
    }
}
