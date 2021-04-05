import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'validColor',
})
export class ValidColorPipe implements PipeTransform {
    transform(value: any, ...args: unknown[]): unknown {
        const s = new Option().style;
        s.color = value;
        const test1 = s.color === value;
        const test2 = /^#[0-9A-F]{6}$/i.test(value);
        if (test1 === true || test2 === true) {
            return true;
        } else {
            return false;
        }
    }
}
