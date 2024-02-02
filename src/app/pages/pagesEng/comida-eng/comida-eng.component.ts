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

    brunchList: LaCultaElement[] =
        [
            {
                name: "Savoury choice",
                price: 50,
                ingredients: "Cheese and pesto Panini, sautéed potatoes, scrambled eggs with bacon, mortadella, fruit juice, and hot beverage."
            },
            {
                name: "Sweet choice",
                price: 50,
                ingredients: "Pancake, dulce de leche, jam, chopped fruit, yogurt, mixed nuts, fruit juice, or hot beverage."
            },
        ]

    entradaList: LaCultaElement[] =
        [
            {
                name: "Tapa Andina",
                price: 15,
                ingredients: "Toasted bread, basil pesto, caramelized tomatoes, and goat cheese."
            },
            {
                name: "Caprese",
                price: 15,
                ingredients: "Accordion-style tomato stuffed with mozzarella and basil seasoned with olive oil."
            },
            {
                name: "Opcional",
                price: 15,
                ingredients: "Ask for the option of the month."
            }
        ]

    vegetarianaList: LaCultaElement[] =
        [
            {
                name: "Pique Vegetariano",
                price: 45,
                ingredients: "Mushrooms, egg, French fries, tomato, onion, sauces, mayonnaise, and spicy mayonnaise."
            },
            {
                name: "Phisara",
                price: 35,
                ingredients: "Quinoa, corn, fresh cheese, cherry tomatoes, peas, and sprouts."
            },
            {
                name: "Pasta",
                price: 35,
                ingredients: "Mushrooms, fettuccine, basil pesto, heavy cream, and cherry tomatoes."
            },
        ]

    foodList: LaCultaElement[] =
        [
            {
                name: "Pasta criolla",
                price: 35,
                ingredients: "Pasta, cream, basil, bacon, sautéed chicken.",
                img: "Pasta_Criolla"
            },
            {
                name: "Milanesa Cheese",
                price: 35,
                ingredients: "Chicken Milanese, cheese, tomato, rustic fries.",
                img: "Mila_Cheese"
            },
            {
                name: "Karapecho",
                price: 35,
                ingredients: "Dried meat, hominy, potato, egg, lemon.",
                img: "Karapecho"
            },
            {
                name: "Sullka Karapanza",
                price: 35,
                ingredients: "Beef, sautéed hominy, golden potatoes, house sauce.",
                img: "Sullka"
            },
            {
                name: "Muslitos BBQ",
                price: 30,
                ingredients: "Crispy chicken drumsticks, French fries, semi-spicy sauce.",
                img: "Muslitos"
            },
            {
                name: "Anticucho Ajicero",
                price: 25,
                ingredients: "Beef heart, cocktail potatoes, house salad, peanut sauce, Uchuluru.",
                img: "Anticucho_Ajicero"
            },
            {
                name: "Cordon Bleu",
                price: 45,
                ingredients: "Spring rice, chicken fillet stuffed with ham and cheese, special house sauce.",
                img: ""
            },
            {
                name: "Pique a lo macho",
                price: 45,
                ingredients: "Tenderloin, sausage, French fries, tomato, onion, quail egg, sauces, mayonnaise, and spicy mayonnaise.",
                img: "Pique_Macho"
            },
            {
                name: "Cerdo Agridulce",
                price: 45,
                ingredients: "Spring rice, sautéed vegetables, pork, and sweet and sour sauce.",
                img: ""
            },
            {
                name: "Burguer premium",
                price: 35,
                ingredients: "180 grams of beef, bread, pickles, lettuce, double bacon, cheddar cheese, mozzarella cheese, French fries, caramelized onion.",
                img: "Burguer"
            },
            {
                name: "Chorizo Chuquisaqueño",
                price: 50,
                ingredients: "Chorizo, slices of bread, lettuce salad, tomato, onion, and locoto.",
                img: ""
            }
        ]

    infantilList: LaCultaElement[] =
        [
            {
                name: "Pulpitos",
                ingredients: "Sausage, French fries.",
                price: 20,
                img: ""
            },
            {
                name: "Burguer clásica de la casa",
                ingredients: "150 grams of beef, bread, pickles, lettuce, bacon, mozzarella cheese, French fries, mayonnaise.",
                price: 30,
                img: ""
            },
        ]

    piqueoSaladoList: LaCultaElement[] =
        [
            {
                name: "Portion of French Fries",
                price: 18,
                img: "Papas_Fritas"
            },
            {
                name: "Porción de papas rústicas",
                ingredients: "French fries, bacon, melted cheese, tripe, and chives.",
                price: 30,
                recomendation: "(2 people)",
                img: "Papas_Rusticas"
            },
            {
                name: "Nachos supremos",
                ingredients: "Nachos with melted cheese and bacon (with or without spice)",
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
                name: "Bacon and Cheese Panini.",
                price: 25,
                img: "Panini_Tocino"
            },
            {
                name: "Cheese and Pesto Panini",
                price: 25,
                img: "Panini_Pesto"
            },
            {
                name: "Chicken Milanese Panini",
                price: 30,
                img: ""
            }
        ]

}
