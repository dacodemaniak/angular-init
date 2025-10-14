import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  private _months: Map<number, string> = new Map([
    [0, 'Janvier'],
    [1, 'Février'],
    [2, 'Mars'],
    [3, 'Avril'],
    [4, 'Mai'],
    [5, 'Juin'],
    [6, 'Juillet'],
    [7, 'Août'],
    [8, 'Septembre'],
    [9, 'Octobre'],
    [10, 'Novembre'],
    [11, 'Décembre']
  ])

  private _days: Map<number, string> = new Map([
    [0, 'Dim.'],
    [1, 'Lun.'],
    [2, 'Mar.'],
    [3, 'Mer.'],
    [4, 'Jeu.'],
    [5, 'Ven.'],
    [6, 'Sam.'],

  ])
  transform(value: Date, ...args: any[]): string {
    const dateParts = [
      this._days.get(value.getDay()),
      value.getDate(),
      this._months.get(value.getMonth()),
      value.getFullYear()
    ]

    return dateParts.join(' ');
  }

}
