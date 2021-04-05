import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { FileItem } from './fileModel';

@Directive({
    selector: '[appDropFiles]',
})
export class DropFilesDirective {
    @Input() images: FileItem[] = [];
    @Output() mouseOver: EventEmitter<boolean> = new EventEmitter();
    @Output() newFiles: EventEmitter<FileItem[]> = new EventEmitter();
    constructor() {}

    @HostListener('dragover', ['$event'])
    public onDragEnter(event: any): void {
        this.mouseOver.emit(true);
        this._preventStop(event);
    }
    @HostListener('dragleave', ['$event'])
    public onDragLeave(event: any): void {
        this.mouseOver.emit(false);
    }

    @HostListener('drop', ['$event'])
    public onDropEvent(event: any): any {
        const transfer = this._getTransfer(event);

        if (!transfer) {
            return;
        } else {
            this.extractFiles(transfer.files);
            this._preventStop(event);
            this.mouseOver.emit(false);
        }
    }

    private _getTransfer(event: any): any {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
    }

    private extractFiles(listFiles: FileList): void {
        const filesTem = [];
        let property: any = null;
        for (property of Object.getOwnPropertyNames(listFiles)) {
            const fileTem = listFiles[property];

            if (this._filecanUpload(fileTem)) {
                const newFile = new FileItem(fileTem);
                filesTem.push(newFile);
            }
        }
        this.images = filesTem;
        this.newFiles.emit(this.images);
    }
    // Validations
    private _filecanUpload(file: File): boolean {
        if (!this._fileDropped(file.name) && this._isImage(file.type)) {
            return true;
        } else {
            return false;
        }
    }
    private _preventStop(event: any): void {
        event.preventDefault();
        event.stopPropagation();
    }
    private _fileDropped(fileName: string): boolean {
        for (const file of this.images) {
            if (file.fileName === fileName) {
                console.log(`El archivo ${fileName} ya existe`);
            }
            return true;
        }

        return false;
    }

    private _isImage(fileType: string): boolean {
        return fileType === '' || fileType === undefined ? false : fileType.startsWith('image');
    }
}
