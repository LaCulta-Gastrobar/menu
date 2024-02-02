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
                ingredients: "Espresso, water, frothed milk",
                img: "Capuccino"
            },
            {
                name: "Americano",
                price: 15,
                ingredients: "Espresso and water.",
                img: "Americano"
            },
            {
                name: "Latte",
                price: 15,
                ingredients: "Espresso and milk.",
                img: "Latte"
            },
            {
                name: "Submbarino",
                price: 22,
                ingredients: "Hot milk with a rich bite of chocolate.",
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
                ingredients: "House Tea",
                img: "Te_Evaporada"
            },
            {
                name: "Té con té",
                price: 25,
                ingredients: "Tea with singani",
                img: ""
            }
        ]

}
