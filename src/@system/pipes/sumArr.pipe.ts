import { Pipe, PipeTransform } from '@angular/core';
import _ from 'lodash';

@Pipe({
    name: 'sumArr',
    pure: false,
})
export class SumArrPipe implements PipeTransform {
    transform(value: any, group: string, sum: string): any {
        if (value !== undefined && value !== null) {
            let summed = _(value)
                .groupBy(group)
                .map((objs, key) => {
                    return {
                        name: key,
                        color: _.uniqBy(objs, 'color')[0].color,
                        value: _.sumBy(objs, sum),
                    };
                })
                .value();
            return summed;
        }
        return value;
    }
}
