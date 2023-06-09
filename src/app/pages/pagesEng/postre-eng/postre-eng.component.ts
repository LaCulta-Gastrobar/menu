import { Component, OnInit } from '@angular/core';
import { LaCultaElement } from 'src/app/interfaces/element.interface';

@Component({
  selector: 'app-postre-eng',
  templateUrl: './postre-eng.component.html',
  styleUrls: ['./postre-eng.component.css']
})
export class PostreEngComponent implements OnInit {

  postreList: LaCultaElement[] =
  [
    {
      name: "Sable of berries",
      price: 20,
      img: "Sable"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
