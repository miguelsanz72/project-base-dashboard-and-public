import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { systemAnimations } from '@theme/animations';

export interface IDataDialog {
    message: string;
    title: string;
    showBtnClose: boolean;
}

@Component({
    selector: 'fuse-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls: ['./confirm-dialog.component.scss'],
    animations: systemAnimations,
})
export class ConfirmDialogComponent {
    dataDialog: IDataDialog;

    /**
     * Constructor
     *
     * @param {MatDialogRef<ConfirmDialogComponent>} dialogRef
     */
    constructor(
        public dialogRef: MatDialogRef<ConfirmDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public _data: IDataDialog
    ) {
        this.dataDialog = _data;
    }
}
