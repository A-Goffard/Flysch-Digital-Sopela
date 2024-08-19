import { Component } from '@angular/core';
import { BackComponentComponent } from "../../../../../shared/back-component/back-component.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zona3-actividad5',
  standalone: true,
  imports: [CommonModule, BackComponentComponent],
  templateUrl: './actividad5.component.html',
  styleUrls: ['./actividad5.component.css']
})
export class Actividad5Component {
  constructor(private router: Router) {}

  hecho() {
    const respuestasCorrectas = JSON.parse(localStorage.getItem('respuestasCorrectas') || '{}');
    respuestasCorrectas['/zona3/actividades/actividad5'] = true;
    localStorage.setItem('respuestasCorrectas', JSON.stringify(respuestasCorrectas));

    this.router.navigate(['/zona3/actividades/actividad5/hecho']);
  }

  fallo() {
    this.router.navigate(['/zona3/actividades/actividad5/fallo']);
  }
}
