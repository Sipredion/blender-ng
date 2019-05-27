import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomColor'
})
export class RandomColorPipe implements PipeTransform {

  transform(value: string): any {
    const colors = [
      'primary',
      'accent',
      'warn'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

}
