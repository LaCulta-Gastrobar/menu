import { Pipe, PipeTransform } from '@angular/core';
import { LaCultaElement } from '../interfaces/element.interface';

@Pipe({
  standalone: true,
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(laCultaElement: LaCultaElement): string {
    return `~src/assets/element/${laCultaElement.img}.jpg`;
  }

}
