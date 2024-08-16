import { Component } from '@angular/core';
import { BackComponentComponent } from "../../../../../shared/back-component/back-component.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zona1-actividad2',
  standalone: true,
  imports: [CommonModule, BackComponentComponent],
  templateUrl: './actividad2.component.html',
  styleUrl: './actividad2.component.css'
})
export class Actividad2Component {
  constructor(private router: Router) {}

  hecho() {
    this.router.navigate(['/zona1/actividades/actividad2/hecho']);
  }

  fallo() {
    this.router.navigate(['/zona1/actividades/actividad2/fallo']);
  }
}
