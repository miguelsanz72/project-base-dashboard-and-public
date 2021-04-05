import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'typeof',
})
export class TypeofPipe implements PipeTransform {
    transform(value: any): any {
        const project = 'Project';
        const task = 'Task';
        const email = 'Email';
        const image = 'Image';
        const actions = 'IsActions';
        if (Array.isArray(value) && value.length) {
            const toString = JSON.stringify(value[0]);
            if (toString.includes('"project":{')) {
                return task;
            } else if (toString.includes('"photoURL":{')) {
                return image;
            } else {
                return project;
            }
        } else {
            const toString = JSON.stringify(value);
            if (typeof toString === 'string' && toString.includes('@')) {
                return email;
            } else if (toString && toString.includes('isActions')) {
                return actions;
            } else {
                return typeof value;
            }
        }
    }
}
