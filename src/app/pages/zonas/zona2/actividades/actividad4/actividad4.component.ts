import { Component } from '@angular/core';
import { BackComponentComponent } from "../../../../../shared/back-component/back-component.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zona2-actividad4',
  standalone: true,
  imports: [CommonModule, BackComponentComponent],
  templateUrl: './actividad4.component.html',
  styleUrls: ['./actividad4.component.css']
})
export class Actividad4Component {
  constructor(private router: Router) {}

  hecho() {
    const respuestasCorrectas = JSON.parse(localStorage.getItem('respuestasCorrectas') || '{}');
    respuestasCorrectas['/zona2/actividades/actividad4'] = true;
    localStorage.setItem('respuestasCorrectas', JSON.stringify(respuestasCorrectas));

    this.router.navigate(['/zona2/actividades/actividad4/hecho']);
  }

  fallo() {
    this.router.navigate(['/zona2/actividades/actividad4/fallo']);
  }
}