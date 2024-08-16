import { Component } from '@angular/core';
import { BackComponentComponent } from "../../../../../shared/back-component/back-component.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zona3-actividad4',
  standalone: true,
  imports: [CommonModule, BackComponentComponent],
  templateUrl: './actividad4.component.html',
  styleUrl: './actividad4.component.css'
})
export class Actividad4Component {
  constructor(private router: Router) {}

  hecho() {
    this.router.navigate(['/zona3/actividades/actividad4/hecho']);
  }

  fallo() {
    this.router.navigate(['/zona3/actividades/actividad4/fallo']);
  }
}
