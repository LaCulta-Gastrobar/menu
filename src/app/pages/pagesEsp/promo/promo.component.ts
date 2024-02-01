import { Component } from '@angular/core';
import {LaCultaElement} from "../../../interfaces/element.interface";
import {ImagenPipe} from "../../../pipes/imagen.pipe";
import {NgForOf, UpperCasePipe} from "@angular/common";
import {GoBackComponent} from "../../../shared/go-back/go-back.component";

@Component({
  selector: 'app-promo',
  standalone: true,
  imports: [
    ImagenPipe,
    UpperCasePipe,
    GoBackComponent,
    NgForOf
  ],
  templateUrl: './promo.component.html',
  styleUrl: './promo.component.css'
})
export class PromoComponent {

  promoList: LaCultaElement[] =
    [
      {
        name: "Chuflay",
        price: "40",
      },
      {
        name: "Cuba Libre",
        price: "40",
      },
      {
        name: "Fernet",
        price: "35",
      },
      {
        name: "Mojito Frutado",
        price: "40",
        img: "Mojito_Frutado_Promo"
      },
      {
        name: "Dirty Mojito",
        price: "35",
        img: "Dirty_Mojito"
      },
      {
        name: "Caipirinha",
        price: "35",
        img: "Caipirinha"
      },
      {
        name: "Cerveza rubia o artesanal",
        price: "30",
        img: "Promo_Artesanal"
      },
      {
        name: "Gin con Gin/Tonic",
        price: 60,
        img: "Promo_Gin"
      },
      {
        name: "Ajenjo Collins",
        price: 50,
        img: ""
      },
    ]

}
