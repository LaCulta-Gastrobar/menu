import { Component, OnInit } from '@angular/core';
import { LaCultaElement } from 'src/app/interfaces/element.interface';

@Component({
  selector: 'app-postre',
  templateUrl: './postre.component.html',
  styleUrls: ['./postre.component.css']
})
export class PostreComponent implements OnInit {

  postreList: LaCultaElement[] =
    [
      {
        name: "Sable de frutos rojos",
        price: 20,
        img: "Sable"
      }
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
