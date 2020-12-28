import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'typeof',
})
export class TypeofPipe implements PipeTransform {
    transform(value: any): any {
        const project = 'Project';
        const task = 'Task';
        const email = 'Email';
        if (Array.isArray(value) && value.length) {
            const toString = JSON.stringify(value[0]);
            if (toString.includes('"project":{')) {
                return task;
            } else if (toString.includes('@')) {
                return email;
            } else {
                return project;
            }
        } else {
            const toString = JSON.stringify(value);
            if (typeof toString === 'string' && toString.includes('@')) {
                return email;
            } else {
                return typeof value;
            }
        }
    }
}
