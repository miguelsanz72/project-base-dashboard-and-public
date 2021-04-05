export class FileItem {
    file: File;
    fileName: string;
    url: string;
    uploading: boolean;
    progress: number;
    type: string;
    name: string;
    size: number;
    arrayBuffer: any;
    lastModified: any;
    slice: any;
    stream: any;
    text: any;
    constructor(file: File) {
        this.url = '';
        this.file = file;
        this.fileName = file.name;
        this.uploading = false;
        this.progress = 0;
        this.type = '';
        this.name = '';
        this.size = 0;
    }
}

export interface PhotoURL {
    url?: string;
    name: string;
    key?: string;
    extension?: string;
    mimetype?: string;
    size?: number;
    type?: string;
    charter?: string;
    color?: string;
}
