import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'imgProfile',
})
export class ImgProfilePipe implements PipeTransform {
    transform(value: any): any {
        if (typeof value === 'object') {
            const toString = JSON.stringify(value);
            if (toString.includes('url')) {
                const image = value.url;
                return image;
            } else if (toString.includes('no-image')) {
                return value;
            }
        }
    }
}
