import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterOutlet} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-menu-eng',
  standalone: true,
  imports: [
    RouterOutlet,
    NgIf
  ],
  templateUrl: './menu-eng.component.html',
  styleUrl: './menu-eng.component.css'
})
export class MenuEngComponent {

  menu: boolean = false;
  menuIntern: boolean = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  goComponent(component: string) {
    this.router.navigate([`${component}`], {relativeTo: this.activatedRoute})
    this.menu = true;
    this.menuIntern = false;
  }

}
