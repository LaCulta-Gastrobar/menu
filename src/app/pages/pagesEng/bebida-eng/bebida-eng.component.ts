import { Component, OnInit } from '@angular/core';
import { LaCultaElement } from 'src/app/interfaces/element.interface';

@Component({
  selector: 'app-bebida-eng',
  templateUrl: './bebida-eng.component.html',
  styleUrls: ['./bebida-eng.component.css']
})
export class BebidaEngComponent implements OnInit {

  autorList: LaCultaElement[] =

    [
      {
        name: "Horchalita",
        ingredients: "White Rum, coco, airampo.",
        price: 30,
        img: "Horchalita"
      },
      {
        name: "Mockochinchi",
        ingredients: "7 years Rum, Singani, vermut.",
        price: 30,
        img: "Mockochinchi"
      },
      {
        name: "Juanita guayaba",
        price: 30,
        ingredients: "Gin, guayaba jam, orange juice.",
        img: "Juanita"
      },
      {
        name: "Jatun Pocoy",
        ingredients: "7 years Rum, supay, ajenjo, palo santo.",
        price: 30,
        img: "Jatun"
      },
      {
        name: "Misky Sucre",
        ingredients: "7 years Rum, cocoa, milk.",
        price: 30,
        img: "Misky"
      },
      {
        name: "K´achamosita",
        ingredients: "Singani, ratafia, fruit mix.",
        price: 35,
        img: "Kachamosita"
      },
      {
        name: "Warmi",
        ingredients: "Vodka, airampo, grapefruit, camu camu.",
        price: 35,
        img: "Warmi"
      },
      {
        name: "Ajenjo Collins",
        ingredients: "Ajenjo, mixer.",
        price: 25,
        img: ""
      },
      {
        name: "Gin Cinnamon",
        ingredients: "Gin, cinnamon, mocochinchi.",
        price: 30,
        img: "Cinnamon"
      },
      {
        name: "Hot Cocktail",
        price: 30,
        img: "Cinnamon"
      },
      {
        name: "Caramel",
        ingredients: "White rum, dulce de leche, coconut.",
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
        name: "Ajenjo bottle 750 ml",
        price: 150,
        ingredients: "botanical liqueur",
        recomendation: "(bottle)",
        img: "Ajenjo"
      },
      {
        name: "Ajenjo bottle 250 ml",
        price: 60,
        ingredients: "botanical liqueur",
        recomendation: "(bottle)",
        img: "Ajenjo"
      },
      {
        name: "Ajenjo bottle 50 ml",
        price: 30,
        ingredients: "botanical liqueur",
        recomendation: "(bottle)",
        img: "Ajenjo"
      },
      {
        name: "Ratafia bottle 750 ml",
        price: 95,
        recomendation: "(bottle)",
      },
      {
        name: "Ratafia bottle 250 ml",
        price: 50,
        recomendation: "(bottle)",
      },
      {
        name: "Ratafia bottle 50 ml",
        price: 30,
        recomendation: "(bottle)",
      },
      {
        name: "Coñac bottle 750 ml",
        price: 150,
        recomendation: "(bottle)",
      },
      {
        name: "Coñac bottle 250 ml",
        price: 55,
        recomendation: "(bottle)",
      },
      {
        name: "Coñac bottle 50 ml",
        price: 30,
        recomendation: "(bottle)",
      },
      {
        name: "Trencito los Cintis 4 bottles 50 ml",
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
        ingredients: "Red fruits, singani, carbonated water, lemon.",
        img: "Berries3"
      },
      {
        name: "Singanito",
        price: 180,
        ingredients: "San Pedro bottle, ice, lemon, bitter and cinnamon.",
        img: "Singanito"
      },
      {
        name: "Charcas Punch",
        price: 190,
        ingredients: "Mango, maracuyá, tumbo, lemon.",
        img: "Charcas"
      },
      {
        name: "Ajenjo",
        price: 180,
        ingredients: "botanical liqueur."
      }
    ]

  clasicasList: LaCultaElement[] =
    [
      {
        name: "Old Fashioned",
        price: 30,
        ingredients: "Whisky, smoked oak.",
        img: "Old"
      },
      {
        name: "Margarita",
        price: 30,
        ingredients: "White Tequila, cointreau.",
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
        ingredients: "Singani, red fruits.",
        img: "BerryV"
      },
      {
        name: "Piña colada",
        price: 30,
        ingredients: "White Rum, coconut, pineapple.",
        img: "PinaColada"
      },
      {
        name: "Fruit Mojitos",
        price: 30,
        ingredients: "Dark rum, seasonal fruits.",
        img: "Mojito_Frutado"
      },
      {
        name: "Queen Park Swizzle",
        price: 30,
        ingredients: "7 years RUM , bitter, mint.",
        img: "Queen"
      },
      {
        name: "Branca Julep",
        price: 30,
        ingredients: "Fernet branca, bitter, mint.",
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
        name: "Huari beer bottle",
        price: 20,
        ingredients: "Lagger, honey.",
        img: "Botellin_Huari"
      },
      {
        name: "Corona beer bottle",
        price: 25,
        img: "Corona"
      },
      {
        name: "Sureña beer bottle",
        price: 20,
        img: "Surena"
      },
      {
        name: "craft beer bottle",
        price: 20,
        ingredients: "Black, White, Ipa, Maracuyango",
        img: "Artesanal"
      },
      {
        name: "Huari 620 ml beer",
        price: 25,
        img: "Huari620"
      },
      {
        name: "Paceña 1 L beer",
        price: 30,
        img: "Pacena1"
      },
      {
        name: "Potosina 1250 ml beer",
        price: 35,
        ingredients: "1250ml",
        img: "Potosina"
      },
      {
        name: "Huari beer barrel",
        price: 125,
        img: ""
      },
      {
        name: "Paceña beer barrel",
        price: 110,
        img: ""
      },
      {
        name: "Potosina beer barrel",
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
        name: "Aranjuez Terruño red/white",
        price: 75,
        img: ""
      },
      {
        name: "Clásico red/white (copa)",
        price: 18,
        img: ""
      },
      {
        name: "Duo red/white",
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
        name: "Campos de Solana red/white",
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
        ingredients: "Non-alcoholic fruit cocktail.",
        img: "Mocktail"
      },
      {
        name: "Natural juices",
        price: 10,
        recomendation: "Glass",
        img: "Jugos"
      },
      {
        name: "Natural juices",
        price: 18,
        recomendation: "1 Lt",
        img: "Jugos"
      },
      {
        name: "Natural juices",
        price: 25,
        recomendation: "2 Lt",
        img: "Jugos"
      },
      {
        name: "Soda/Still water",
        price: 10,
        img: "Agua"
      },
      {
        name: "Soda",
        price: 10,
        ingredients: "Salvietti, Coca-Cola, Fanta, Sprite, Guaraná",
        recomendation: "500ML",
        img: "Soda"
      },
      {
        name: "Soda",
        price: 20,
        ingredients: "Salvietti, Coca-Cola, Fanta, Sprite, Guaraná",
        recomendation: "2 Lt",
        img: "Soda"
      }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
