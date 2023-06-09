import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-eng',
  templateUrl: './menu-eng.component.html',
  styleUrls: ['./menu-eng.component.css']
})
export class MenuEngComponent implements OnInit {

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
