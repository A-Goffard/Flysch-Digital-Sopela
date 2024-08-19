import { Component } from '@angular/core';
import { BackComponentComponent } from "../../../../../shared/back-component/back-component.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zona3-actividad1',
  standalone: true,
  imports: [CommonModule, BackComponentComponent],
  templateUrl: './actividad1.component.html',
  styleUrl: './actividad1.component.css'
})
export class Actividad1Component {
  constructor(private router: Router) {}

  hecho() {
    const respuestasCorrectas = JSON.parse(localStorage.getItem('respuestasCorrectas') || '{}');
    respuestasCorrectas['/zona3/actividades/actividad1'] = true;
    localStorage.setItem('respuestasCorrectas', JSON.stringify(respuestasCorrectas));

    this.router.navigate(['/zona3/actividades/actividad1/hecho']);
  }

  fallo() {
    this.router.navigate(['/zona3/actividades/actividad1/fallo']);
  }
}

