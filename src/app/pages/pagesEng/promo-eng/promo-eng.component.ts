import { Component, OnInit } from '@angular/core';
import { LaCultaElement } from 'src/app/interfaces/element.interface';

@Component({
  selector: 'app-promo-eng',
  templateUrl: './promo-eng.component.html',
  styleUrls: ['./promo-eng.component.css']
})
export class PromoEngComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
