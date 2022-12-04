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
<<<<<<< HEAD
  transform(value: number): string {
=======
  transform(value: number): unknown {
>>>>>>> b80b0255a1521500d283db7788730ba2752b7de9
    return (value * 3.6).toFixed(1);
  }

}
