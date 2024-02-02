import { Component } from '@angular/core';
import {LaCultaElement} from "../../../interfaces/element.interface";
import {NgForOf, UpperCasePipe} from "@angular/common";
import {ImagenPipe} from "../../../pipes/imagen.pipe";
import {GoBackEngComponent} from "../../../shared/go-back-eng/go-back-eng.component";

@Component({
  selector: 'app-juego-eng',
  standalone: true,
  imports: [
    UpperCasePipe,
    ImagenPipe,
    GoBackEngComponent,
    NgForOf
  ],
  templateUrl: './juego-eng.component.html',
  styleUrl: './juego-eng.component.css'
})
export class JuegoEngComponent {

  juegoList: LaCultaElement[] =
    [
      {
        name: "Uno",
        price: "FREE",
        img: "Uno"
      },
      {
        name: "Playing cards",
        price: "FREE",
        img: "Cartas"
      },
      {
        name: "Cacho",
        price: "FREE",
        img: "Cacho"
      },
      {
        name: "Yenga",
        price: "FREE",
        img: "Yenga"
      },
    ]

}
