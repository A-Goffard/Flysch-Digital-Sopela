import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) {}

  goToPrueba1() {
    this.router.navigate(['/prueba1']);
  }

  goToContext() {
    this.router.navigate(['/context']);
  }

}
