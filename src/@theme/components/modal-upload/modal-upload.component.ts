import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslatePipe } from '@ngx-translate/core';
import { AlertsService } from '@services*';
import { FilesAWSS3Service } from '../files/files-awss3.service';

@Component({
    selector: 'app-modal-upload',
    templateUrl: './modal-upload.component.html',
    styleUrls: ['./modal-upload.component.scss'],
})
export class ModalUploadComponent implements OnInit {
    imagenUpload!: any;
    imagenTem: any;
    loading = false;
    canUpload = false;

    constructor(
        public dialogRef: MatDialogRef<ModalUploadComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: any,
        private _filesAWSS3Service: FilesAWSS3Service,
        private translate: TranslatePipe,
        private _alertsService: AlertsService
    ) {}

    ngOnInit(): void {}

    selectImage(event: any): any {
        const file = event.target.files[0];
        if (!file) {
            this.imagenUpload = null;
            return;
        }
        console.log(file.type);
        if (
            file.type === 'image/jpg' ||
            file.type === 'image/png' ||
            file.type === 'image/jpeg' ||
            file.type === 'text/csv' ||
            file.type === 'application/pdf' ||
            file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
            file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ) {
            const message = this.translate.transform('MESSAGES.UPLOAD.MAX_FILE');

            if (file.size.valueOf() > 2000000) {
                this._alertsService.messageSnackBar(message, '❌', 2000);
                this.imagenUpload = null;
                return;
            }

            this.imagenUpload = file;

            const reader = new FileReader();
            const urlImagenTem = reader.readAsDataURL(file);
            if (file.type.indexOf('image') < 0) {
                reader.onloadend = () => (this.imagenTem = 'assets/images/logo/file-screen.png');
            } else {
                reader.onloadend = () => (this.imagenTem = reader.result);
            }
        } else {
            const messageFileType = this.translate.transform('MESSAGES.UPLOAD.TYPE_FILE_NOT');
            this._alertsService.messageSnackBar(messageFileType, '❌', 2000);
        }
    }

    uploadFileAwsS3(): void {
        this.loading = true;
        this._filesAWSS3Service.cantDelete = true;
        this._filesAWSS3Service.uploadFile(this.imagenUpload).subscribe(
            (image) => {
                this.dialogRef.close(image);
                this.loading = false;
            },
            (err) => {
                console.log(err);
                this.dialogRef.close(null);
                this.loading = false;
            }
        );
    }
}
