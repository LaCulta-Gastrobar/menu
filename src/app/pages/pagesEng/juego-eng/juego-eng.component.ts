import { Component, OnInit } from '@angular/core';
import { LaCultaElement } from 'src/app/interfaces/element.interface';

@Component({
  selector: 'app-juego-eng',
  templateUrl: './juego-eng.component.html',
  styleUrls: ['./juego-eng.component.css']
})
export class JuegoEngComponent implements OnInit {

  juegoList: LaCultaElement[] =
  [
    {
      name: "Uno",
      price: "Gratis",
      img: "Uno"
    },
    {
      name: "Playing cards",
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
