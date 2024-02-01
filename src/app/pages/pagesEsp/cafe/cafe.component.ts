import { Component } from '@angular/core';
import {LaCultaElement} from "../../../interfaces/element.interface";
import {ImagenPipe} from "../../../pipes/imagen.pipe";
import {NgForOf, UpperCasePipe} from "@angular/common";
import {GoBackComponent} from "../../../shared/go-back/go-back.component";

@Component({
  selector: 'app-cafe',
  standalone: true,
  imports: [
    ImagenPipe,
    UpperCasePipe,
    GoBackComponent,
    NgForOf
  ],
  templateUrl: './cafe.component.html',
  styleUrl: './cafe.component.css'
})
export class CafeComponent {

  cafeList: LaCultaElement[] =
    [
      {
        name: "Espresso",
        price: 13,
        img: "Expresso"
      },
      {
        name: "Capuccino",
        price: 15,
        ingredients: "Espresso, agua, leche espumosa",
        img: "Capuccino"
      },
      {
        name: "Americano",
        price: 15,
        ingredients: "Espresso, agua",
        img: "Americano"
      },
      {
        name: "Latte",
        price: 15,
        ingredients: "Espresso, leche",
        img: "Latte"
      },
      {
        name: "Submbarino",
        price: 22,
        ingredients: "Leche caliente con un bocado intenso de chocolate",
        img: ""
      },
      {
        name: "Té de menta y limón",
        price: 10,
        img: "Te_Menta"
      },
      {
        name: "Té de la casa",
        price: 13,
        ingredients: "Té, leche evaporada",
        img: "Te_Evaporada"
      },
      {
        name: "Té con té",
        price: 25,
        ingredients: "Té con singani",
        img: ""
      }
    ]

}
