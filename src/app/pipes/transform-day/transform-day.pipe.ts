import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'transformDay'
})
export class TransformDayPipe implements PipeTransform {

  transform(value: any, format: 'number' | 'name'): any {
    if (format === 'number') {
      return moment(value).format('DD');
    }
    if (format === 'name') {
      return new Date(value).toLocaleDateString('en-gb', {weekday: 'long'});
    }
  }

}
