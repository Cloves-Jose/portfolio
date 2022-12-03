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
  transform(value: number): unknown {
    return (value * 3.6).toFixed(1);
  }

}
