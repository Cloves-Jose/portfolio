import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'velocity'
})
export class VelocityPipe implements PipeTransform {

  /**
   * Transforma m/s para km/h
   * @param value 
   * @returns 
   */
  transform(value: number): string {
    return (value * 3.6).toFixed(1);
  }

}
