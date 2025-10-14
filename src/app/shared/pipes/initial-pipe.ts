import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initial'
})
export class InitialPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    return value.substring(0, 1).toUpperCase();
  }

}
