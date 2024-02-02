import { Component } from '@angular/core';
import { LaCultaElement } from '../../../interfaces/element.interface';
import { GoBackEngComponent } from "../../../shared/go-back-eng/go-back-eng.component";
import {NgForOf, UpperCasePipe} from "@angular/common";
import {ImagenPipe} from "../../../pipes/imagen.pipe";

@Component({
    selector: 'app-bebida-eng',
    standalone: true,
    templateUrl: './bebida-eng.component.html',
    styleUrl: './bebida-eng.component.css',
  imports: [GoBackEngComponent, UpperCasePipe, ImagenPipe, NgForOf]
})
export class BebidaEngComponent {

    sinAlcoholList: LaCultaElement[] =
        [
            {
                name: "Mocktail",
                price: 20,
                ingredients: "Non-alcoholic fruit cocktail.",
                img: "Mocktail"
            },
            {
                name: "Fresh Juice (Glass)",
                price: 10,
                img: "Jugos"
            },
            {
                name: "Fresh Juice (1 Liter)",
                price: 18,
                img: "Jugos"
            },
            {
                name: "Fresh Juice (2 Liters)",
                price: 25,
                img: "Jugos"
            },
            {
                name: "Soda (500 ml)",
                price: 10,
                ingredients: "Coca cola (Zero), Fanta, Sprite, Guaraná, Salvietti.",
                recomendation: "500ML",
                img: "Soda"
            },
            {
                name: "Soda (2 Liters)",
                price: 25,
                ingredients: "Coca cola (Zero), Fanta, Sprite, Guaraná, Salvietti.",
                recomendation: "2 LITROS",
                img: "Soda"
            },
            {
                name: "Water (with or without gas, 500 ml)",
                price: 10,
                img: "Agua"
            },
            {
                name: "Water (with or without gas, 2 Liters)",
                price: 20,
                img: "Agua"
            },
            {
                name: "Tonic Water (1 Liter)",
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
                name: "House Pitcher",
                price: 150,
                ingredients: "Tumbo, rum, absinthe, blue curacao, and singani.",
                img: ""
            },
            {
                name: "ABSINTHE 750 ML",
                price: 150,
                img: "Ajenjo"
            },
            {
                name: "ABSINTHE 375 ML",
                price: 75,
                img: "Ajenjo"
            },
            {
                name: "ABSINTHE 250 ML",
                price: 50,
                img: "Ajenjo"
            },
            {
                name: "ABSINTHE 50 ML",
                price: 35,
                img: "Ajenjo"
            },
            {
                name: "RATAFIA 375 ML",
                price: 75,
            },
            {
                name: "RATAFIA 250 ML",
                price: 50,
            },
            {
                name: "RATAFIA 50 ML",
                price: 35,
            },
            {
                name: "ARTISANAL DISTILLED SINGANI 375 ML",
                price: 75,
            },
            {
                name: "ARTISANAL DISTILLED SINGANI 250 ML",
                price: 50,
            },
            {
                name: "ARTISANAL DISTILLED SINGANI 50 ML",
                price: 35,
            },
            {
                name: "Chocolate shot glass + liquor",
                price: 12,
            },
            {
                name: "Cintis Train (50 ml bottles)",
                price: 115,
                img: "Trencito"
            }
        ]

    autorList: LaCultaElement[] =
        [
            {
                name: "Horchalita",
                ingredients: "White rum, coconut, airampo.",
                price: 30,
                img: "Horchalita"
            },
            {
                name: "Mockochinchi",
                ingredients: "7 year old rum, Singani, Vermouth,",
                price: 30,
                img: "Mockochinchi"
            },
            {
                name: "Juanita guayaba",
                price: 30,
                ingredients: "Gin, guava jam, orange juice.",
                img: "Juanita"
            },
            {
                name: "Jatun Pocoy",
                ingredients: "7 year old rum, supay, absinthe, lignum vitae",
                price: 30,
                img: "Jatun"
            },
            {
                name: "Misky Sucre",
                ingredients: "7 year old rum, cocoa, milk.",
                price: 30,
                img: "Misky"
            },
            {
                name: "K´achamosita",
                ingredients: "Singani, ratafia, mixed fruit.",
                price: 35,
                img: "Kachamosita"
            },
            {
                name: "Warmi",
                ingredients: "Vodka, airampo, grapefruit, camu comu.",
                price: 35,
                img: "Warmi"
            },
            {
                name: "Ajenjo Collins",
                ingredients: "Absinthe, mixer",
                price: 30,
                img: ""
            },
            {
                name: "Gin Cinnamon",
                ingredients: "Gin, cinnamon, mocochinchi",
                price: 35,
                img: "Cinnamon"
            },
            {
                name: "Hot cocktail",
                price: 30,
                img: "Cinnamon"
            },
            {
                name: "Caramel",
                ingredients: "While rum, dulce de leche, coconut.",
                price: 30,
                img: "Caramel"
            }
        ]

    clasicasList: LaCultaElement[] =
        [
            {
                name: "Old Fashioned",
                price: 30,
                ingredients: "Whisky, smoked oak",
                img: "Old"
            },
            {
                name: "Negroni",
                price: 40,
                ingredients: "Gin, Vermouth, Campari",
                img: "Negroni"
            },
            {
                name: "Aperol Sprit",
                price: 35,
                ingredients: "Aperol, sparkling wine.",
                img: ""
            },
            {
                name: "Mojitos frutados",
                price: 25,
                ingredients: "Dark rum, seasonal fruits.",
                img: "Mojito_Frutado"
            },
            {
                name: "Berry Singani Punch",
                price: 30,
                ingredients: "Singani, berries.",
                img: "BerryV"
            },
            {
                name: "Piña colada",
                price: 30,
                ingredients: "White rum, coconut, pineapple.",
                img: "PinaColada"
            },
            {
                name: "Queen Park Swizzle",
                price: 30,
                ingredients: "7 year old rum, bitters, mint.",
                img: "Queen"
            },
            {
                name: "Moscow Mule",
                price: 30,
                ingredients: "Vodka, ginger, ginger syrup, lemon.",
                img: ""
            },
            {
                name: "Branca Julep",
                price: 30,
                ingredients: "Fernet Branca, pineapple, mint.",
                img: "Branca_Julep"
            },
            {
                name: "GIN TONIC/GIN AND TONIC",
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
                ingredients: "White tequila, orange liqueur.",
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
                recomendation: "Two shots of Jagger with red bull",
                img: "Shot_Vodka"
            }
        ]

    cervezasList: LaCultaElement[] =
        [
            {
                name: "Cata Menestral",
                price: 75,
                ingredients: "Four varieties of beers"
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
                ingredients: "San Pedro bottle, ice, lemon, bitter.",
                img: "Singanito"
            },
            {
                name: "Berry Singani Punch",
                price: 220,
                ingredients: "Berries, singani, sparkling water, lemon.",
                img: "Berries3"
            },
            {
                name: "Charcas",
                price: 220,
                ingredients: "Mango, passion fruit, tumbo, lemon.",
                img: "Charcas"
            },
            {
                name: "Ajenjo",
                price: 200,
                ingredients: "Botanical liqueur."
            }
        ]

}
