import { Component } from '@angular/core';
import {LaCultaElement} from "../../../interfaces/element.interface";
import {NgForOf, UpperCasePipe} from "@angular/common";
import {ImagenPipe} from "../../../pipes/imagen.pipe";
import {GoBackEngComponent} from "../../../shared/go-back-eng/go-back-eng.component";

@Component({
  selector: 'app-promo-eng',
  standalone: true,
  imports: [
    UpperCasePipe,
    ImagenPipe,
    GoBackEngComponent,
    NgForOf
  ],
  templateUrl: './promo-eng.component.html',
  styleUrl: './promo-eng.component.css'
})
export class PromoEngComponent {

  promoList: LaCultaElement[] =
    [
      {
        name: "Rum",
        price: "30",
        img: "Vaso_Ron"
      },
      {
        name: "Singani",
        price: "30",
        img: "Vaso_Singani"
      },
      {
        name: "Fernet",
        price: "30",
        img: "Vaso_Ron"
      },
      {
        name: "Fruity Mojito",
        price: "40",
        img: "Mojito_Frutado_Promo"
      },
      {
        name: "Dirty Mojito",
        price: "40",
        img: "Dirty_Mojito"
      },
      {
        name: "Caipirinha",
        price: "40",
        img: "Caipirinha"
      },
      {
        name: "Blonde or craft beer",
        price: "30",
        img: "Promo_Artesanal"
      },
      {
        name: "Gin with Gin/Tonic",
        price: 50,
        img: "Promo_Gin"
      },
      {
        name: "Ajenjo Collins",
        price: 35,
        img: ""
      },
      {
        name: "Bucket of bottles",
        price: 90,
        recomendation: "5 mixed beers",
        img: ""
      }

    ]

}
