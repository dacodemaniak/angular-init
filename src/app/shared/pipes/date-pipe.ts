import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: Date, ...args: any[]): string {
    const dateParts = [
      value.getDate(),
      value.getMonth() + 1,
      value.getFullYear()
    ]

    return dateParts.join(args[0]);
  }

}
