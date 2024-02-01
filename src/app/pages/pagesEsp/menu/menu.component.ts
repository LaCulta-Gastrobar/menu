import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterOutlet} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterOutlet,
    NgIf
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  menu: boolean = false;
  menuIntern: boolean = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  goComponent(component: string) {
    this.router.navigate([`${component}`], {relativeTo: this.activatedRoute})
    this.menu = true;
    this.menuIntern = false;
  }

}
