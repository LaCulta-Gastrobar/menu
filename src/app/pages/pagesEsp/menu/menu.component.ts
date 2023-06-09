import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: boolean = false;
  menuIntern: boolean = true;

  constructor(private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  goComponent(component: string) {
    this.router.navigate([`${component}`], {relativeTo: this.activatedRoute})
    this.menu = true;
    this.menuIntern = false;
  }

}
