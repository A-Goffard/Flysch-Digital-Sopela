import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zona5-actividad3-fallo3',
  standalone: true,
  imports: [],
  templateUrl: './fallo.component.html',
  styleUrl: './fallo.component.css'
})
export class FalloComponent {
  constructor(private router: Router) {}

  volverIntentar() {
    this.router.navigate(['/zona5/actividades/actividad3']);
  }

  siguiente() {
    this.router.navigate(['/zona5/actividades/actividad4']);
  }
}
