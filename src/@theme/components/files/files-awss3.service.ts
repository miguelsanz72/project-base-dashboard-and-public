import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { RespApi } from '@models*';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PhotoURL } from './fileModel';

@Injectable({
    providedIn: 'root',
})
export class FilesAWSS3Service {
    urlApi = environment.url_api;
    public fileData = new EventEmitter<PhotoURL>();
    cantDelete = false;
    constructor(public http: HttpClient) {}

    uploadFile(file: File): Observable<PhotoURL> {
        const formData = new FormData();
        formData.append('file', file);
        const url = `${this.urlApi}/files/upload`;
        return this.http.post(url, formData).pipe(
            map((resp: any) => {
                this.fileData.emit(resp);
                return resp;
            })
        );
    }

    deleteFile(fileName: string): Observable<RespApi> {
        const url = `${this.urlApi}/files/delete/${fileName}`;
        return this.http.delete(url).pipe(
            map((resp: any) => {
                return resp;
            })
        );
    }
}
