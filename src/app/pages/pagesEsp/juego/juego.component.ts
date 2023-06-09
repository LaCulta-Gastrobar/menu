import { Component, OnInit } from '@angular/core';
import { LaCultaElement } from 'src/app/interfaces/element.interface';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
