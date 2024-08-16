import { Component } from '@angular/core';
import { BackComponentComponent } from "../../../../../shared/back-component/back-component.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zona3-actividad5',
  standalone: true,
  imports: [CommonModule, BackComponentComponent],
  templateUrl: './actividad5.component.html',
  styleUrl: './actividad5.component.css'
})
export class Actividad5Component {
  constructor(private router: Router) {}

  hecho() {
    this.router.navigate(['/zona3/actividades/actividad5/hecho']);
  }

  fallo() {
    this.router.navigate(['/zona3/actividades/actividad5/fallo']);
  }
}
