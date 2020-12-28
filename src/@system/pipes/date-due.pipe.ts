import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateDue',
})
export class DateDuePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value) {
      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000) * -1;
      if (seconds < 29 && seconds > 0) {
        return 'Justo ahora';
      }
      if (seconds < 0) {
        return '¡Vencido!';
      }
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
            return 'Vence en ' + counter + ' ' + i; // singular (1 day ago)
          } else {
            return 'Vence en ' + counter + ' ' + i + 's'; // plural (2 days ago)
          }
        }
      }
    }
    return value;
  }
}
