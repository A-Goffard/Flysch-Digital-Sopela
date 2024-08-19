import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zona4-actividad4-fallo4',
  standalone: true,
  imports: [],
  templateUrl: './fallo.component.html',
  styleUrl: './fallo.component.css'
})
export class FalloComponent {
  constructor(private router: Router) {}

  volverIntentar() {
    this.router.navigate(['/zona4/actividades/actividad4']);
  }

  siguiente() {
    this.router.navigate(['/zona4/actividades/actividad5']);
  }
}