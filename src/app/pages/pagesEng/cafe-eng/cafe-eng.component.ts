import { Component } from '@angular/core';
import {LaCultaElement} from "../../../interfaces/element.interface";
import {NgForOf, UpperCasePipe} from "@angular/common";
import {ImagenPipe} from "../../../pipes/imagen.pipe";
import {GoBackEngComponent} from "../../../shared/go-back-eng/go-back-eng.component";

@Component({
  selector: 'app-cafe-eng',
  standalone: true,
  imports: [
    UpperCasePipe,
    ImagenPipe,
    GoBackEngComponent,
    NgForOf
  ],
  templateUrl: './cafe-eng.component.html',
  styleUrl: './cafe-eng.component.css'
})
export class CafeEngComponent {

  desayunoList: LaCultaElement[] =
    [
      {
        name: "KARAPANZA",
        price: 40,
        ingredients: "Ham, rolled, coffee and juice."
      },
      {
        name: "Huevos rancheros, coffee - tea or juice",
        price: 35,
      },
      {
        name: "Rolled sandwich",
        price: 15,
      },
      {
        name: "Ham Sandwich",
        price: 15,
      },
      {
        name: "Juices",
        price: 10,
      },
    ]

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
        ingredients: "Espresso, water, foamy milk",
        img: "Capuccino"
      },
      {
        name: "American",
        price: 15,
        ingredients: "Espresso, water",
        img: "Americano"
      },
      {
        name: "Latte",
        price: 15,
        ingredients: "Espresso, milk",
        img: "Latte"
      },
      {
        name: "Herbs infusion",
        price: 15,
        ingredients: "Manzanilla, coca, aniz, cedrón",
        img: "Infusion"
      },
      {
        name: "Lemon mint tea",
        price: 10,
        img: "Te_Menta"
      },
      {
        name: "House tea",
        price: 13,
        ingredients: "Tea, evaporated milk",
        img: "Te_Evaporada"
      },
    ]

}
