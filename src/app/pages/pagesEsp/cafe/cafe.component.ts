import { Component, OnInit } from '@angular/core';
import { LaCultaElement } from 'src/app/interfaces/element.interface';


@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrls: ['./cafe.component.css']
})
export class CafeComponent implements OnInit {

  desayunoList: LaCultaElement[] =
  [
    {
      name: "KARAPANZA",
      price: 40,
      ingredients: "Jamón, enrollado, café y jugo"
    },
    {
      name: "Huevos rancheros, café - té o jugo",
      price: 35,
    },
    {
      name: "Sandwich enrollado",
      price: 15,
    },
    {
      name: "Sandwich jamón",
      price: 15,
    },
    {
      name: "Jugos",
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
      name: "Infusión de hierbas",
      price: 15,
      ingredients: "Manzanilla, coca, aniz, cedrón",
      img: "Infusion"
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
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
