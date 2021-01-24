import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'extension',
})
export class ExtensionPipe implements PipeTransform {
    transform(value: string): any {
        const data = JSON.stringify(value);
        let extension = '';

        if (data.includes('sheet')) {
            extension = 'xls';
        } else if (data.includes('document')) {
            extension = 'doc';
        } else {
            extension = value;
        }
        return extension;
    }
}
