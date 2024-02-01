import { Component } from '@angular/core';
import {LaCultaElement} from "../../../interfaces/element.interface";
import {ImagenPipe} from "../../../pipes/imagen.pipe";
import {NgForOf, UpperCasePipe} from "@angular/common";
import {GoBackComponent} from "../../../shared/go-back/go-back.component";

@Component({
  selector: 'app-juego',
  standalone: true,
  imports: [
    ImagenPipe,
    UpperCasePipe,
    GoBackComponent,
    NgForOf
  ],
  templateUrl: './juego.component.html',
  styleUrl: './juego.component.css'
})
export class JuegoComponent {

  juegoList: LaCultaElement[] =
    [
      {
        name: "Uno",
        price: "Gratis",
        img: "Uno"
      },
      {
        name: "Cartas",
        price: "Gratis",
        img: "Cartas"
      },
      {
        name: "Cacho",
        price: "Gratis",
        img: "Cacho"
      },
      {
        name: "Yenga",
        price: "Gratis",
        img: "Yenga"
      },
    ]

}
