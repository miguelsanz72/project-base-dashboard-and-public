import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { IUser } from '@models*';
import { PhotoURL } from '../files/fileModel';
import { FilesAWSS3Service } from '../files/files-awss3.service';
import { ModalUploadComponent } from '../modal-upload/modal-upload.component';

@Component({
    selector: 'app-upload-file-theme',
    templateUrl: './upload-file.component.html',
    styleUrls: ['./upload-file.component.scss'],
})
export class UploadFileComponent implements OnInit {
    @Input() imagePlace: any;
    @Input() width: number;
    @Input() height: number;
    @Input() fontSize: number;
    @Input() key: string | undefined;
    @Output() fileUploaded = new EventEmitter<PhotoURL | null>();
    modalUpload!: MatDialogRef<ModalUploadComponent>;
    constructor(private _matDialog: MatDialog, private _filesAWSS3Service: FilesAWSS3Service) {
        this.height = 30;
        this.width = 30;
        this.fontSize = 1;
        this.imagePlace = '';
    }

    ngOnInit(): void {}

    uploadFiles(key: string | undefined): void {
        const imageToDelete = key;
        this.modalUpload = this._matDialog.open(ModalUploadComponent, {
            disableClose: false,
        });
        this.modalUpload.afterClosed().subscribe((data) => {
            if (data && data.ok) {
                const image = data.data;
                if (imageToDelete && image) {
                    if (this._filesAWSS3Service.cantDelete) {
                        this._filesAWSS3Service.deleteFile(imageToDelete).subscribe((data) => {
                            console.log(data);
                        });
                    }
                }
                const file = {
                    url: image.url,
                    name: image.name,
                    key: image.key,
                    extension: image.extension,
                    mimetype: image.mimetype,
                    size: image.size,
                    type: image.type,
                };
                this.fileUploaded.emit(file);
            } else {
                this.fileUploaded.emit(null);
            }
        });
    }
}
