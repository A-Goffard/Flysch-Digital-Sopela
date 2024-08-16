import { Component } from '@angular/core';
import { BackComponentComponent } from "../../../../../shared/back-component/back-component.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zona2-actividad3',
  standalone: true,
  imports: [CommonModule, BackComponentComponent],
  templateUrl: './actividad3.component.html',
  styleUrl: './actividad3.component.css'
})
export class Actividad3Component {
  constructor(private router: Router) {}

  hecho() {
    this.router.navigate(['/zona2/actividades/actividad3/hecho']);
  }

  fallo() {
    this.router.navigate(['/zona2/actividades/actividad3/fallo']);
  }
}

