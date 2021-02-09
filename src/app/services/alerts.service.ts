import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
    providedIn: 'root',
})
export class AlertsService {
    constructor(private _snackBar: MatSnackBar) {}

    messages(title: string, _icon: SweetAlertIcon, message: string, footer?: string): void {
        Swal.fire({
            title: title,
            text: message,
            icon: _icon,
            allowOutsideClick: false,
            confirmButtonText: 'Ok',
            footer: footer,
        });
    }

    messageSnackBar(message: string, icon: string, duration: number): void {
        this._snackBar.open(message, icon, {
            duration: duration,
        });
    }
}
