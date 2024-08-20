import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackComponentComponent } from "../../../../../../shared/back-component/back-component.component";

@Component({
  selector: 'app-zona4-actividad3-fallo3',
  standalone: true,
  imports: [BackComponentComponent],
  templateUrl: './fallo.component.html',
  styleUrl: './fallo.component.css'
})
export class FalloComponent {
  constructor(private router: Router) {}

  volverIntentar() {
    this.router.navigate(['/zona4/actividades/actividad3']);
  }

  siguiente() {
    this.router.navigate(['/zona4/actividades/actividad4']);
  }
}