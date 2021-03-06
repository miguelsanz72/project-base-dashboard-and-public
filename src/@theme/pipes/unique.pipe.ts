import { Pipe, PipeTransform } from '@angular/core';
import _ from 'lodash';

@Pipe({
    name: 'unique',
    pure: false,
})
export class UniquePipe implements PipeTransform {
    transform(value: any, arg: string): any {
        if (value !== undefined && value !== null) {
            return _.uniqBy(value, arg);
        }
        return value;
    }
}
