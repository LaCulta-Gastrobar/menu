import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  constructor(private router: Router) { }

  espClick() {
    console.log("Español");
    this.router.navigate(['/esp']);
  }

  engClick() {
    console.log("Ingles");
    this.router.navigate(['/eng']);
  }

}
