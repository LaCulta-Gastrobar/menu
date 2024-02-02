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
