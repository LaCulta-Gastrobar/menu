import { Component, OnInit } from '@angular/core';
import { LaCultaElement } from 'src/app/interfaces/element.interface';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.css']
})
export class PromoComponent implements OnInit {

  promoList: LaCultaElement[] =
    [
      {
        name: "Ron",
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
        name: "Mojito Frutado",
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
        name: "Cerveza rubia o artesanal",
        price: "30",
        img: "Promo_Artesanal"
      },
      {
        name: "Gin con Gin/Tonic",
        price: 50,
        img: "Promo_Gin"
      },
      {
        name: "Ajenjo Collins",
        price: 35,
        img: ""
      },
      {
        name: "Cubeta botellines",
        price: 90,
        recomendation: "5 cervezas mix",
        img: ""
      }
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
