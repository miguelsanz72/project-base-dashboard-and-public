import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateAgo',
})
export class DateAgoPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value) {
      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
      if (seconds < 29) {
        // less than 30 seconds ago will show as 'Just now'
        return 'Justo ahora';
      }
      // const intervals = {
      //     year: 31536000,
      //     month: 2592000,
      //     week: 604800,
      //     day: 86400,
      //     hour: 3600,
      //     minute: 60,
      //     second: 1,
      // };
      const intervals: any = {
        año: 31536000,
        mes: 2592000,
        semana: 604800,
        dia: 86400,
        hora: 3600,
        minuto: 60,
        segundo: 1,
      };
      let counter;
      // eslint-disable-next-line guard-for-in
      for (const i in intervals) {
        counter = Math.floor(seconds / intervals[i]);
        if (counter > 0) {
          if (counter === 1) {
            return 'Hace ' + counter + ' ' + i; // singular (1 day ago)
          } else {
            return 'Hace ' + counter + ' ' + i + 's'; // plural (2 days ago)
          }
        }
      }
    }
    return value;
  }
}
