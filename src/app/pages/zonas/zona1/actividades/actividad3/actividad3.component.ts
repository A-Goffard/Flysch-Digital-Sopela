import { Component } from '@angular/core';
import { BackComponentComponent } from "../../../../../shared/back-component/back-component.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zona1-actividad3',
  standalone: true,
  imports: [CommonModule, BackComponentComponent],
  templateUrl: './actividad3.component.html',
  styleUrls: ['./actividad3.component.css']
})
export class Actividad3Component {
  constructor(private router: Router) {}

  hecho() {
    const respuestasCorrectas = JSON.parse(localStorage.getItem('respuestasCorrectas') || '{}');
    respuestasCorrectas['/zona1/actividades/actividad3'] = true;
    localStorage.setItem('respuestasCorrectas', JSON.stringify(respuestasCorrectas));

    this.router.navigate(['/zona1/actividades/actividad3/hecho']);
  }

  fallo() {
    this.router.navigate(['/zona1/actividades/actividad3/fallo']);
  }
}
