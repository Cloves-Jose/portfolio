import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'velocity'
})
export class VelocityPipe implements PipeTransform {

  transform(value: number): unknown {
    return (value * 3.6).toFixed(1);
  }

}
