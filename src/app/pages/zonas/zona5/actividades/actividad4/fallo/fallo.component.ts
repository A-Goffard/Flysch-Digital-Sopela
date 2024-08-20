import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackComponentComponent } from "../../../../../../shared/back-component/back-component.component";

@Component({
  selector: 'app-zona5-actividad4-fallo4',
  standalone: true,
  imports: [BackComponentComponent],
  templateUrl: './fallo.component.html',
  styleUrl: './fallo.component.css'
})
export class FalloComponent {
  constructor(private router: Router) {}

  volverIntentar() {
    this.router.navigate(['/zona5/actividades/actividad4']);
  }

  siguiente() {
    this.router.navigate(['/zona5/actividades/actividad5']);
  }
}