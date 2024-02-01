import { Component } from '@angular/core';
import {LaCultaElement} from "../../../interfaces/element.interface";
import {NgForOf, UpperCasePipe} from "@angular/common";
import {ImagenPipe} from "../../../pipes/imagen.pipe";
import {GoBackEngComponent} from "../../../shared/go-back-eng/go-back-eng.component";

@Component({
  selector: 'app-postre-eng',
  standalone: true,
  imports: [
    UpperCasePipe,
    ImagenPipe,
    GoBackEngComponent,
    NgForOf
  ],
  templateUrl: './postre-eng.component.html',
  styleUrl: './postre-eng.component.css'
})
export class PostreEngComponent {

  postreList: LaCultaElement[] =
    [
      {
        name: "Sable of berries",
        price: 20,
        img: "Sable"
      }
    ]

}
