import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { IUser } from '@models*';
import { ModalUploadComponent } from '../modal-upload/modal-upload.component';
import { FileItem, PhotoURL } from './fileModel';
import { FilesAWSS3Service } from './files-awss3.service';

@Component({
    selector: 'app-files',
    templateUrl: './files.component.html',
    styleUrls: ['./files.component.scss'],
})
export class FilesComponent implements OnInit {
    @Input() folderConditional: string;
    @Input() type: any;
    @Input() collectionDb: string;
    files: FileItem[] = [];
    mouseOverElement = false;
    folderImages: string;
    imagesTemp: PhotoURL[] = [];
    displayedColumns = ['name', 'size', 'progress'];
    dataSource: any;

    constructor() {
        this.folderImages = 'pending';
        this.folderConditional = '';
        this.collectionDb = '';
    }

    ngOnInit(): void {}

    showImages(images: FileItem[]): void {
        this.files = images;
    }
    extractFiles(listFiles: FileItem[]): void {
        const filesTem = [];
        let property: any = null;
        for (property of Object.getOwnPropertyNames(listFiles)) {
            const fileTem = listFiles[property];

            if (this._isImage(fileTem.type)) {
                const newFile = new FileItem(fileTem);
                filesTem.push(newFile);
            }
        }
        this.files = filesTem;
    }

    cleanFiles(): void {
        this.files = [];
    }

    private _isImage(fileType: string): boolean {
        return fileType === '' || fileType === undefined ? false : fileType.startsWith('image');
    }
}
