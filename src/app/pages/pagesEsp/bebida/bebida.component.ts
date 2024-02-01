import { Component } from '@angular/core';
import {LaCultaElement} from "../../../interfaces/element.interface";
import {ImagenPipe} from "../../../pipes/imagen.pipe";
import {NgForOf, UpperCasePipe} from "@angular/common";
import {GoBackComponent} from "../../../shared/go-back/go-back.component";

@Component({
  selector: 'app-bebida',
  standalone: true,
  imports: [
    ImagenPipe,
    UpperCasePipe,
    GoBackComponent,
    NgForOf
  ],
  templateUrl: './bebida.component.html',
  styleUrl: './bebida.component.css'
})
export class BebidaComponent {

  sinAlcoholList: LaCultaElement[] =
    [
      {
        name: "Mocktail",
        price: 20,
        ingredients: "Coctel de frutas sin alcohol.",
        img: "Mocktail"
      },
      {
        name: "Jugos naturales vaso",
        price: 10,
        img: "Jugos"
      },
      {
        name: "Jugos naturales 1 litro",
        price: 18,
        img: "Jugos"
      },
      {
        name: "Jugos naturales 2 litros",
        price: 25,
        img: "Jugos"
      },
      {
        name: "Gaseosa 500 ml",
        price: 10,
        ingredients: "Coca cola (Zero), Fanta, Sprite, Guaraná, Salvietti.",
        recomendation: "500ML",
        img: "Soda"
      },
      {
        name: "Gaseosa 2 litros",
        price: 25,
        ingredients: "Coca cola (Zero), Fanta, Sprite, Guaraná, Salvietti.",
        recomendation: "2 LITROS",
        img: "Soda"
      },
      {
        name: "Agua C/S gas 500 ml",
        price: 10,
        img: "Agua"
      },
      {
        name: "Agua C/S gas 2 litros",
        price: 20,
        img: "Agua"
      },
      {
        name: "Agua tónica 1 litro",
        price: 15,
        img: ""
      },
      {
        name: "Redbull",
        price: 25,
        img: ""
      },
    ]

  casaList: LaCultaElement[] =
    [
      {
        name: "Jarra de la casa",
        price: 150,
        ingredients: "Tumbo, ron, ajenjo, blue curacao y singani.",
        img: ""
      },
      {
        name: "Ajenjo 750 ml",
        price: 150,
        img: "Ajenjo"
      },
      {
        name: "Ajenjo botella 375 ml",
        price: 75,
        img: "Ajenjo"
      },
      {
        name: "Ajenjo botella 250 ml",
        price: 50,
        img: "Ajenjo"
      },
      {
        name: "Ajenjo botella 50 ml",
        price: 35,
        img: "Ajenjo"
      },
      {
        name: "Ratafia 375 ml",
        price: 75,
      },
      {
        name: "Ratafia 50 ml",
        price: 35,
      },
      {
        name: "Singani artesanal destilado 375 ml",
        price: 75,
      },
      {
        name: "Singani artesanal destilado 250 ml",
        price: 50,
      },
      {
        name: "Singani artesanal destilado 50 ml",
        price: 35,
      },
      {
        name: "Vasito de chocolate + licor",
        price: 12,
      },
      {
        name: "Trencito los Cintis botellas de 50 ml",
        price: 115,
        img: "Trencito"
      }
    ]

  autorList: LaCultaElement[] =

    [
      {
        name: "Horchalita",
        ingredients: "Ron blanco, coco, airampo.",
        price: 30,
        img: "Horchalita"
      },
      {
        name: "Mockochinchi",
        ingredients: "Ron 7 años, Singani, vermut.",
        price: 30,
        img: "Mockochinchi"
      },
      {
        name: "Juanita guayaba",
        price: 30,
        ingredients: "Gin, mermelada de guayaba, jugo de naranja.",
        img: "Juanita"
      },
      {
        name: "Jatun Pocoy",
        ingredients: "Ron 7 años, supay, ajenjo, palo santo.",
        price: 30,
        img: "Jatun"
      },
      {
        name: "Misky Sucre",
        ingredients: "Ron 7 años, cacao, leche.",
        price: 30,
        img: "Misky"
      },
      {
        name: "K´achamosita",
        ingredients: "Singani, ratafia, mix de frutas.",
        price: 35,
        img: "Kachamosita"
      },
      {
        name: "Warmi",
        ingredients: "Vodka, airampo, pomelo, camu camu.",
        price: 35,
        img: "Warmi"
      },
      {
        name: "Ajenjo Collins",
        ingredients: "Ajenjo, mezclador.",
        price: 30,
        img: ""
      },
      {
        name: "Gin Cinnamon",
        ingredients: "Gin, canela, mocochinchi.",
        price: 35,
        img: "Cinnamon"
      },
      {
        name: "Coctel caliente",
        price: 30,
        img: "Cinnamon"
      },
      {
        name: "Caramel",
        ingredients: "Ron blanco, dulce de leche, coco.",
        price: 30,
        img: "Caramel"
      }
    ]

  clasicasList: LaCultaElement[] =
    [
      {
        name: "Old Fashioned",
        price: 30,
        ingredients: "Whisky, ahumado de roble.",
        img: "Old"
      },
      {
        name: "Negroni",
        price: 40,
        ingredients: "Gin, vermut, campari.",
        img: "Negroni"
      },
      {
        name: "Aperol Sprit",
        price: 35,
        ingredients: "Aperol, vino espumante.",
        img: ""
      },
      {
        name: "Mojitos frutados",
        price: 25,
        ingredients: "Ron oscuro, frutas de temporada.",
        img: "Mojito_Frutado"
      },
      {
        name: "Berry Singani Punch",
        price: 30,
        ingredients: "Singani, frutos rojos.",
        img: "BerryV"
      },
      {
        name: "Piña colada",
        price: 30,
        ingredients: "Ron blanco, coco, piña.",
        img: "PinaColada"
      },
      {
        name: "Queen Park Swizzle",
        price: 30,
        ingredients: "Ron 7 años, bitter, menta.",
        img: "Queen"
      },
      {
        name: "Moscow Mule",
        price: 30,
        ingredients: "Ron 7 años, bitter, menta.",
        img: ""
      },
      {
        name: "Branca Julep",
        price: 30,
        ingredients: "Fernet branca, bitter, menta.",
        img: "Branca_Julep"
      },
      {
        name: "Gin tonic/Gin con gin",
        price: 35,
        img: ""
      },
      {
        name: "Caipiriña",
        price: 25,
        img: ""
      },
      {
        name: "Margarita",
        price: 30,
        ingredients: "Tequila blanco, cointreau.",
        img: "Margarita"
      },
    ]

  tikiList: LaCultaElement[] =
    [
      {
        name: "Blue Hawai",
        price: 35,
        img: ""
      },
      {
        name: "Uga, Ugha",
        price: 40,
        img: ""
      },
      {
        name: "Contiki",
        price: 35,
        img: ""
      },
      {
        name: "Mai Tai",
        price: 40,
        img: ""
      }
    ]

  shotsList: LaCultaElement[] =
    [
      {
        name: "Ajenjo",
        price: 15,
        img: "Shot_Ajenjo_2"
      },
      {
        name: "Ratafia Ciruela",
        price: 15,
      },
      {
        name: "Ratafia Membrillo",
        price: 15,
      },
      {
        name: "Tequila",
        price: 20,
        img: "Shot_Tequila"
      },
      {
        name: "Jagermeister",
        price: 20,
        img: "Shot_Jagger"
      },
      {
        name: "Ratafia",
        price: 15,
      },
      {
        name: "Vodka",
        price: 20,
      },
      {
        name: "Jagger Bomb",
        price: 60,
        recomendation: "Dos shots de Jagger, red bull.",
        img: "Shot_Vodka"
      }
    ]

  cervezasList: LaCultaElement[] =
    [
      {
        name: "Cata Menestral",
        price: 75,
        ingredients: "Cuatro variedades de cervezas",
      },
      {
        name: "Ajenjo Boom",
        price: 33,
      },
      {
        name: "Botellín Huari",
        price: 22,
        ingredients: "Lagger, Miel.",
        img: "Botellin_Huari"
      },
      {
        name: "Botellín Paceña Centenario",
        price: 20,
      },
      {
        name: "Botellín Uyuni",
        price: 22,
      },
      {
        name: "Amstel",
        price: 25,
      },
      {
        name: "Botellín Corona",
        price: 25,
        img: "Corona"
      },
      {
        name: "Botellín Potosina 4000",
        price: 33,
      },
      {
        name: "Sureña Oro 620 ml",
        price: 25,
      },
      {
        name: "Botellín artesanal",
        price: 25,
      },
      {
        name: "Huari 620 ml",
        price: 30,
      },
      {
        name: "Paceña 1 lt",
        price: 30,
        img: "Pacena1"
      },
      {
        name: "Potosina 1 lt",
        price: 35,
        ingredients: "1250ml",
        img: "Potosina"
      },
      {
        name: "Barril de Huari",
        price: 130,
        img: ""
      },
      {
        name: "Barril de Paceña",
        price: 110,
        img: ""
      },
      {
        name: "Barril de Potosina",
        price: 100,
        img: ""
      },
      {
        name: "Barril de Sureña",
        price: 90,
        img: ""
      }
    ]

  vinosList: LaCultaElement[] =
    [
      {
        name: "Aranjuez Terruño tinto/blanco",
        price: 75,
        img: ""
      },
      {
        name: "Clásico tinto/blanco (copa)",
        price: 18,
        img: ""
      },
      {
        name: "Rose",
        price: 120,
        img: ""
      },
      {
        name: "Tanat",
        price: 160,
        img: ""
      },
      {
        name: "Encuentro",
        price: 100,
        img: ""
      },
      {
        name: "Campos de Solana tinto/blanco",
        price: 75,
        img: ""
      },
      {
        name: "Oporto",
        price: 85,
        img: ""
      },
      {
        name: "Vino espumante",
        price: 100,
        img: ""
      },
      {
        name: "Trivarietal (Tannat, Malbec, Petit Verdot)",
        price: 320,
        img: ""
      },
      {
        name: "Ester Ortiz",
        price: 450,
        img: ""
      }
    ]

  botellasList: LaCultaElement[] =
    [
      {
        name: "Johnnie Walker Blue",
        priceGlass: 150,
        price: 3800,
        img: "Walker_Gold"
      },
      {
        name: "Johnnie Walker Gold",
        priceGlass: 80,
        price: 850,
        img: "Walker_Gold"
      },
      {
        name: "Johnnie Walker Double Black",
        priceGlass: 60,
        price: 650,
        img: "Walker"
      },
      {
        name: "Johnnie Walker Black",
        priceGlass: 45,
        price: 500,
        img: "Walker_Black"
      },
      {
        name: "Johnnie Walker Red",
        priceGlass: 35,
        price: 380,
        recomendation: "WHISKY",
        img: "Walker_Red"
      },
      {
        name: "Jack Daniel's",
        priceGlass: 45,
        price: 500,
        img: "Jack"
      },
      {
        name: "Old Parr",
        priceGlass: 45,
        price: 500,
        img: "Old_Parr"
      },
      {
        name: "Sandy Mac",
        priceGlass: 35,
        price: 350,
        img: "Sandy_Mac"
      },
      {
        name: "Singani San Pedro",
        priceGlass: 25,
        price: 200,
        img: "San_Pedro"
      },
      {
        name: "Singani Casa Real",
        priceGlass: 22,
        price: 180,
        img: ""
      },
      {
        name: "Barbacana",
        priceGlass: 25,
        price: 190,
      },
      {
        name: "Huella",
        priceGlass: 30,
        price: 250,
      },
      {
        name: "Don Lucho Silver",
        priceGlass: 35,
        price: 320,
      },
      {
        name: "Flor de Caña",
        priceGlass: 25,
        price: 180,
        img: "Flor"
      },
      {
        name: "Havana especial",
        priceGlass: 25,
        price: 230,
      },
      {
        name: "Barceló Añejo",
        priceGlass: 28,
        price: 200,
      },
      {
        name: "Ron Abuelo 7 años",
        priceGlass: 30,
        price: 250,
        img: "Abuelo"
      },
      {
        name: "Jaguermeister",
        price: 280,
        img: "Jagger"
      },
      {
        name: "Fernet branca",
        priceGlass: 25,
        price: 200,
        img: "Branca"
      },
      {
        name: "Fernet menta",
        priceGlass: 25,
        price: 200,
        img: "Branca_Menta"
      },
      {
        name: "Tequila José Cuervo reposado, plata",
        price: 250,
        img: "Tequila"
      },
      {
        name: "Vodka 1825",
        priceGlass: 30,
        price: 250,
        img: ""
      },
      {
        name: "Gin Dharma",
        priceGlass: 40,
        price: 400,
      },
      {
        name: "Gin Tanqueray",
        priceGlass: 35,
        price: 450,
      },
      {
        name: "Gin Beefeater",
        priceGlass: 35,
        price: 450,
      },
      {
        name: "Gin La República",
        priceGlass: 30,
        price: 400,
      },
      {
        name: "Gin Bulldog",
        priceGlass: 50,
        price: 550,
      },
      {
        name: "Gin Hendricks",
        priceGlass: 30,
        price: 400,
      }
    ]

  botellonesList: LaCultaElement[] =
    [
      {
        name: "Singanito",
        price: 220,
        ingredients: "Botella San Pedro, hielo, limón, bitter.",
        img: "Singanito"
      },
      {
        name: "Berry Singani Punch",
        price: 220,
        ingredients: "Frutos rojos, singani, agua gasificada, limón.",
        img: "Berries3"
      },
      {
        name: "Charcas",
        price: 220,
        ingredients: "Mango, maracuyá, tumbo, limón.",
        img: "Charcas"
      },
      {
        name: "Ajenjo",
        price: 200,
        ingredients: "Licor botánico."
      }
    ]

}
