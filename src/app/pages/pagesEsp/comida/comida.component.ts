import { Component } from '@angular/core';
import {LaCultaElement} from "../../../interfaces/element.interface";
import {ImagenPipe} from "../../../pipes/imagen.pipe";
import {NgForOf, UpperCasePipe} from "@angular/common";
import {GoBackComponent} from "../../../shared/go-back/go-back.component";

@Component({
  selector: 'app-comida',
  standalone: true,
  imports: [
    ImagenPipe,
    UpperCasePipe,
    GoBackComponent,
    NgForOf
  ],
  templateUrl: './comida.component.html',
  styleUrl: './comida.component.css'
})
export class ComidaComponent {

  brunchList: LaCultaElement[] =
    [
      {
        name: "Opción Salada",
        price: 50,
        ingredients: "Panini de queso y pesto, papines salteados, huevo revuelto con tocino, mortadela, jugo de fruta y bebida caliente."
      },
      {
        name: "Opción Dulce",
        price: 50,
        ingredients: "Panqueque, dulce de leche, mermelada, fruta picada, yogurt, mix de frutos secos, jugo de fruta o bebida caliente."
      },
    ]

  entradaList: LaCultaElement[] =
    [
      {
        name: "Tapa Andina",
        price: 15,
        ingredients: "Pan tostado, pesto de albahaca, tomates caramelizados y queso de cabra."
      },
      {
        name: "Caprese",
        price: 15,
        ingredients: "Tomate acordeón relleno de quesillo y albahaca sasonada con aceite de oliva."
      },
      {
        name: "Opcional",
        price: 15,
        ingredients: "Preguntar por la opción del mes."
      }
    ]

  vegetarianaList: LaCultaElement[] =
    [
      {
        name: "Pique Vegetariano",
        price: 45,
        ingredients: "Setas, huevo, papa frita, tomate, cebolla, salsas, mayonesa y mayonesa picante."
      },
      {
        name: "Phisara",
        price: 35,
        ingredients: "Quinua, choclo, quesillo, tomate cherry, arveja y brotes."
      },
      {
        name: "Pasta",
        price: 35,
        ingredients: "Setas, fetuccini, pesto de albahaca, crema de leche, y tomate cherry."
      },
    ]

  foodList: LaCultaElement[] =
    [
      {
        name: "Pasta criolla",
        price: 35,
        ingredients: "Pasta, crema de leche, albahaca, tocino, pollo salteado.",
        img: "Pasta_Criolla"
      },
      {
        name: "Milanesa Cheese",
        price: 35,
        ingredients: "Milanesa de pollo, queso, tomate, papas fritas rústicas.",
        img: "Mila_Cheese"
      },
      {
        name: "Karapecho",
        price: 35,
        ingredients: "Carne deshidratada, mote, papa, huevo, limón.",
        img: "Karapecho"
      },
      {
        name: "Sullka Karapanza",
        price: 35,
        ingredients: "Carne de res, mote salteado, papas doradas, salsa de la casa.",
        img: "Sullka"
      },
      {
        name: "Muslitos BBQ",
        price: 30,
        ingredients: "Muslitos de pollo crocante, papa frita, salsa semi picante.",
        img: "Muslitos"
      },
      {
        name: "Anticucho Ajicero",
        price: 25,
        ingredients: "Corazón de res, papas cocktail, ensalada de la casa, salsa de maní, uchuluru.",
        img: "Anticucho_Ajicero"
      },
      {
        name: "Cordon Bleu",
        price: 45,
        ingredients: "Lomo, salchicha, papa frita, tomate, cebolla, huevo de codorniz, salsas, mayonesa y mayonesa picante.",
        img: ""
      },
      {
        name: "Pique a lo macho",
        price: 45,
        ingredients: "Lomo, salchicha, papa frita, tomate cebolla, huevo de codorniz, salsas, mayonesa y mayonesa picante.",
        img: "Pique_Macho"
      },
      {
        name: "Cerdo Agridulce",
        price: 45,
        ingredients: "Arroz primavera, verduras salteadas, cerdo y salsa agridulce.",
        img: ""
      },
      {
        name: "Burguer premium",
        price: 35,
        ingredients: "180 gramos de carne de res, pan, pickels, lechuga, doble tocino, queso cheddar, queso mozzarella, papas fritas, cebolla caramelizada.",
        img: "Burguer"
      },
      {
        name: "Chorizo Chuquisaqueño",
        price: 50,
        ingredients: "Chorizo, rodajas de pan, ensalada de lechuga, tomate, cebolla y locoto.",
        img: ""
      }
    ]

  infantilList: LaCultaElement[] =
    [
      {
        name: "Pulpitos",
        ingredients: "Salchicha, papa frita.",
        price: 20,
        img: ""
      },
      {
        name: "Burguer clásica de la casa",
        ingredients: "150 gramos de carne de res, pan, pickels, lechuga, tocino, queso muzarella, papas fritas, mayonesa.",
        price: 30,
        img: ""
      },
    ]

  piqueoSaladoList: LaCultaElement[] =
    [
      {
        name: "Porción de papas",
        price: 18,
        img: "Papas_Fritas"
      },
      {
        name: "Porción de papas rústicas",
        ingredients: "Papa frita, tocino, queso fundido, tripitas, cebollín.",
        price: 30,
        recomendation: "(2 personas)",
        img: "Papas_Rusticas"
      },
      {
        name: "Nachos supremos",
        price: 30,
        recomendation: "(2 personas)",
        img: ""
      }
    ]

  paniniList: LaCultaElement[] =
    [
      {
        name: "Panini de sullka",
        price: 25,
        img: "Panini_Sullka"
      },
      {
        name: "Panini de tocino y queso",
        price: 25,
        img: "Panini_Tocino"
      },
      {
        name: "Panini queso y pesto",
        price: 25,
        img: "Panini_Pesto"
      },
      {
        name: "Panini milanesa de pollo",
        price: 30,
        img: ""
      }
    ]

}
