import { Pipe, PipeTransform } from '@angular/core';
import { LaCultaElement } from '../interfaces/element.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(laCultaElement: LaCultaElement): string {
    return `assets/element/${laCultaElement.img}.jpg`;
  }

}
