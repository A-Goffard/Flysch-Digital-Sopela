import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zona3-actividad2-fallo2',
  standalone: true,
  imports: [],
  templateUrl: './fallo.component.html',
  styleUrl: './fallo.component.css'
})
export class FalloComponent {
  constructor(private router: Router) {}

  volverIntentar() {
    this.router.navigate(['/zona3/actividades/actividad2']);
  }

  siguiente() {
    this.router.navigate(['/zona3/actividades/actividad3']);
  }
}