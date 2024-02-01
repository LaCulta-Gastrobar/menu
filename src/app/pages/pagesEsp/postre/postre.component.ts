import { Component } from '@angular/core';
import {LaCultaElement} from "../../../interfaces/element.interface";
import {ImagenPipe} from "../../../pipes/imagen.pipe";
import {NgForOf, UpperCasePipe} from "@angular/common";
import {GoBackComponent} from "../../../shared/go-back/go-back.component";

@Component({
  selector: 'app-postre',
  standalone: true,
  imports: [
    ImagenPipe,
    UpperCasePipe,
    GoBackComponent,
    NgForOf
  ],
  templateUrl: './postre.component.html',
  styleUrl: './postre.component.css'
})
export class PostreComponent {

  postreList: LaCultaElement[] =
    [
      {
        name: "Sable de frutos rojos",
        price: 22,
        img: "Sable"
      },
      {
        name: "Helados artesanales",
        price: 15,
        img: ""
      }
    ]

}
