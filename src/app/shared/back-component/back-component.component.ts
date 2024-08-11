import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back-component',
  standalone: true,
  imports: [],
  templateUrl: './back-component.component.html',
  styleUrls: ['./back-component.component.css']
})
export class BackComponentComponent {
  constructor(private location: Location) {} // Inyecta Location

  goBack() {
    this.location.back(); // Navega a la página anterior
  }
}
