import { Pipe, PipeTransform } from '@angular/core';
import _ from 'lodash';

@Pipe({
    name: 'sumArr',
    pure: false,
})
export class SumArrPipe implements PipeTransform {
    transform(value: number[]): number {
        return value.reduce((a, b) => {
            return a + b;
        }, 0);
    }
}
