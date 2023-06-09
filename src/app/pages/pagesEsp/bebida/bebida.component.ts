import { Component, OnInit } from '@angular/core';
import { LaCultaElement } from 'src/app/interfaces/element.interface';

@Component({
  selector: 'app-bebida',
  templateUrl: './bebida.component.html',
  styleUrls: ['./bebida.component.css']
})
export class BebidaComponent implements OnInit {

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
        price: 25,
        img: ""
      },
      {
        name: "Gin Cinnamon",
        ingredients: "Gin, canela, mocochinchi.",
        price: 30,
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
    }
  ]

  casaList: LaCultaElement[] =
    [
      {
        name: "Ajenjo botella 750 ml",
        price: 150,
        ingredients: "Licor botánico",
        recomendation: "(botella)",
        img: "Ajenjo"
      },
      {
        name: "Ajenjo botella 250 ml",
        price: 60,
        ingredients: "Licor botánico",
        recomendation: "(botella)",
        img: "Ajenjo"
      },
      {
        name: "Ajenjo botella 50 ml",
        price: 30,
        ingredients: "Licor botánico",
        recomendation: "(botella)",
        img: "Ajenjo"
      },
      {
        name: "Ratafia Botella 750 ml",
        price: 95,
        recomendation: "(botella)",
      },
      {
        name: "Ratafia Botella 250 ml",
        price: 50,
        recomendation: "(botella)",
      },
      {
        name: "Ratafia Botella 50 ml",
        price: 30,
        recomendation: "(botella)",
      },
      {
        name: "Coñac botella 750 ml",
        price: 150,
        recomendation: "(botella)",
      },
      {
        name: "Coñac botella 250 ml",
        price: 55,
        recomendation: "(botella)",
      },
      {
        name: "Coñac botella 50 ml",
        price: 30,
        recomendation: "(botella)",
      },
      {
        name: "Trencito los Cintis 4 botellas de 50 ml",
        price: 100,
        ingredients: "Ratafias, coñac, ajenjo.",
        img: "Trencito"
      }
    ]

  botellonesList: LaCultaElement[] =
    [
      {
        name: "Berry Singani Punch",
        price: 170,
        ingredients: "Frutos rojos, singani, agua gasificada, limón.",
        img: "Berries3"
      },
      {
        name: "Singanito",
        price: 180,
        ingredients: "Botella San Pedro, hielo, limón, bitter y canela.",
        img: "Singanito"
      },
      {
        name: "Charcas Punch",
        price: 190,
        ingredients: "Mango, maracuyá, tumbo, limón.",
        img: "Charcas"
      },
      {
        name: "Ajenjo",
        price: 180,
        ingredients: "Licor botánico."
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
        name: "Margarita",
        price: 30,
        ingredients: "Tequila blanco, cointreau.",
        img: "Margarita"
      },
      {
        name: "Negroni",
        price: 40,
        ingredients: "Gin, vermut, campari.",
        img: "Negroni"
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
        name: "Mojitos frutados",
        price: 30,
        ingredients: "Ron oscuro, frutas de temporada.",
        img: "Mojito_Frutado"
      },
      {
        name: "Queen Park Swizzle",
        price: 30,
        ingredients: "Ron 7 años, bitter, menta.",
        img: "Queen"
      },
      {
        name: "Branca Julep",
        price: 30,
        ingredients: "Fernet branca, bitter, menta.",
        img: "Branca_Julep"
      },
      {
        name: "Gin tonic/Gin con gin",
        price: 30,
        img: ""
      },
      {
        name: "Caipiriña",
        price: 25,
        img: ""
      }
    ]

  cervezasList: LaCultaElement[] =
    [
      {
        name: "Botellín cerveza Huari",
        price: 20,
        ingredients: "Lagger, Miel.",
        img: "Botellin_Huari"
      },
      {
        name: "Botellín cerveza Corona",
        price: 25,
        img: "Corona"
      },
      {
        name: "Botellín cerveza Sureña",
        price: 20,
        img: "Surena"
      },
      {
        name: "Botellín cerveza artesanal",
        price: 20,
        ingredients: "Black, White, Ipa, Maracuyango",
        img: "Artesanal"
      },
      {
        name: "Cerveza Huari 620 ml",
        price: 25,
        img: "Huari620"
      },
      {
        name: "Cerveza Paceña 1 L",
        price: 30,
        img: "Pacena1"
      },
      {
        name: "Cerveza Potosina 1250 ml",
        price: 35,
        ingredients: "1250ml",
        img: "Potosina"
      },
      {
        name: "Barril de cerveza Huari",
        price: 125,
        img: ""
      },
      {
        name: "Barril de cerveza Paceña",
        price: 110,
        img: ""
      },
      {
        name: "Barril de cerveza Potosina",
        price: 100,
        img: ""
      }
    ]

  botellasList: LaCultaElement[] =
    [
      {
        name: "Johnnie Walker Gold",
        priceGlass: 75,
        price: 800,
        img: "Walker_Gold"
      },
      {
        name: "Johnnie Walker Double Black",
        priceGlass: 60,
        price: 550,
        img: "Walker"
      },
      {
        name: "Johnnie Walker Black",
        priceGlass: 45,
        price: 450,
        img: "Walker_Black"
      },
      {
        name: "Johnnie Walker Red",
        priceGlass: 35,
        price: 300,
        recomendation: "WHISKY",
        img: "Walker_Red"
      },
      {
        name: "Jack Daniel's",
        priceGlass: 40,
        price: 400,
        img: "Jack"
      },
      {
        name: "Old Parr",
        priceGlass: 45,
        price: 450,
        img: "Old_Parr"
      },
      {
        name: "Sandy Mac",
        priceGlass: 35,
        price: 300,
        img: "Sandy_Mac"
      },
      {
        name: "Singani San Pedro",
        priceGlass: 20,
        price: 175,
        img: "San_Pedro"
      },
      {
        name: "Singani Tierra Alta",
        priceGlass: 20,
        price: 175,
        img: "Tierra_Alta"
      },
      {
        name: "Flor de Caña 5 años",
        priceGlass: 20,
        price: 160,
        img: "Flor"
      },
      {
        name: "Ron Abuelo 7 años",
        price: 220,
        img: "Abuelo"
      },
      {
        name: "Jaguermeister",
        price: 200,
        img: "Jagger"
      },
      {
        name: "Fernet branca",
        priceGlass: 20,
        price: 170,
        img: "Branca"
      },
      {
        name: "Fernet menta",
        priceGlass: 20,
        price: 170,
        img: "Branca_Menta"
      },
      {
        name: "Gin Tanqueray",
        priceGlass: 30,
        price: 350,
        img: "Tanquerray"
      },
      {
        name: "Gin La República reserva del maestro",
        price: 380,
        img: "Republica_Maestro"
      },
      {
        name: "Tequila José Cuervo reposado, plata",
        price: 200,
        img: "Tequila"
      },
      {
        name: "Vodka 1825",
        price: 250,
        img: ""
      },
      {
        name: "Ajenjo",
        priceGlass: 25,
        price: 175,
        img: "Ajenjo_Mediano",
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
        name: "Duo blanco/tinto",
        price: 95,
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
        name: "Chandon (Champagne)",
        price: 250,
        ingredients: "Extra Brut, Delice.",
        img: ""
      },
      {
        name: "Campos de Solana tinto/blanco",
        price: 120,
        img: ""
      },
      {
        name: "Encuentro",
        price: 100,
        img: ""
      },
      {
        name: "La Casona Molina",
        price: 200,
        img: ""
      },
      {
        name: "Legado de Riviera blanco",
        price: 250,
        img: ""
      },
      {
        name: "Trivarietal (Tannat, Malbec, Petit Verdot)",
        price: 320,
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
        name: "Tequila",
        price: 18,
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
        name: "Coñac",
        price: 15,
        img: "Shot_Vodka"
      }
    ]

  sinAlcoholList: LaCultaElement[] =
    [
      {
        name: "Mocktail",
        price: 20,
        ingredients: "Coctel de frutas sin alcohol.",
        img: "Mocktail"
      },
      {
        name: "Jugos naturales",
        price: 10,
        recomendation: "VASO",
        img: "Jugos"
      },
      {
        name: "Jugos naturales",
        price: 18,
        recomendation: "1 LITRO",
        img: "Jugos"
      },
      {
        name: "Jugos naturales",
        price: 25,
        recomendation: "2 LITROs",
        img: "Jugos"
      },
      {
        name: "Agua C/S gas",
        price: 10,
        img: "Agua"
      },
      {
        name: "Gaseosa",
        price: 10,
        ingredients: "Salvietti, Coca-Cola, Fanta, Sprite, Guaraná",
        recomendation: "500ML",
        img: "Soda"
      },
      {
        name: "Gaseosa",
        price: 20,
        ingredients: "Salvietti, Coca-Cola, Fanta, Sprite, Guaraná",
        recomendation: "2 LITROS",
        img: "Soda"
      }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
