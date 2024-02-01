import { Component } from '@angular/core';
import {LaCultaElement} from "../../../interfaces/element.interface";
import {ImagenPipe} from "../../../pipes/imagen.pipe";
import {NgForOf, UpperCasePipe} from "@angular/common";
import {GoBackEngComponent} from "../../../shared/go-back-eng/go-back-eng.component";

@Component({
  selector: 'app-comida-eng',
  standalone: true,
  imports: [
    ImagenPipe,
    UpperCasePipe,
    GoBackEngComponent,
    NgForOf
  ],
  templateUrl: './comida-eng.component.html',
  styleUrl: './comida-eng.component.css'
})
export class ComidaEngComponent {

  foodList: LaCultaElement[] =
    [
      {
        name: "Creole pasta",
        price: 35,
        ingredients: "Creole pasta, milk cream, basil, bacon, sautéed chicken.",
        img: "Pasta_Criolla"
      },
      {
        name: "Milanesa Cheese",
        price: 35,
        ingredients: "Chicken milanese, cheese, tomato, rustic fries.",
        img: "Mila_Cheese"
      },
      {
        name: "Karapecho",
        price: 35,
        ingredients: "Dehydrated meat, mote, potato, egg, lemon.",
        img: "Karapecho"
      },
      {
        name: "Sullka Karapanza",
        price: 35,
        ingredients: "Beef, sautéed mote, golden potatoes, house sauce.",
        img: "Sullka"
      },
      {
        name: "BBQ drumsticks",
        price: 30,
        ingredients: "Crispy chicken thighs, semi spicy sauce.",
        img: "Muslitos"
      },
      {
        name: "Anticucho Ajicero",
        price: 25,
        ingredients: "Beef heart, cocktail potatoes, house salad, peanut sauce, uchuluru.",
        img: "Anticucho_Ajicero"
      },
      {
        name: "Ají de fideo colonial",
        price: 18,
        ingredients: "Noodles, beef, padilla chili, egg, peas, Creole bush, bread.",
        img: "Aji_Fideo"
      },
      {
        name: "Pique a lo macho",
        price: 45,
        ingredients: "Beef, sausage, french fries, onion tomato, quail egg, sauces, mayonnaise and spicy mayonnaise.",
        img: "Pique_Macho"
      },
      {
        name: "Classic house burger",
        price: 30,
        ingredients: "150 grams of beef, bread, pickels, lettuce, bacon, mozzarella cheese, french fries, mayonnaise.",
        img: "Burguer"
      },
      {
        name: "Premium burger",
        price: 35,
        ingredients: "180 grams of beef, bread, pickels, lettuce, bacon, mozzarella cheese, french fries, mayonnaise.",
        img: "Burguer"
      }
    ]

  piqueoList: LaCultaElement[] =
    [
      {
        name: "Portion of rustic potatoes",
        price: 25,
        ingredients: "French fries, bacon, melted cheese, tripitas, chives.",
        recomendation: "(2 persons)",
        img: "Papas_Rusticas"
      },
      {
        name: "Portion of potatoes",
        price: 10,
        img: "Papas_Fritas"
      },
      {
        name: "Rolled piqueo, ham, bread and sauces",
        price: 40,
        img: "Piqueo_Tabla"
      }
    ]

  paniniList: LaCultaElement[] =
    [
      {
        name: "Sullka panini",
        price: 25,
        img: "Panini_Sullka"
      },
      {
        name: "Bacon and Cheese Panini",
        price: 25,
        img: "Panini_Tocino"
      },
      {
        name: "Panini cheese and pesto",
        price: 25,
        img: "Panini_Pesto"
      }
    ]

}
