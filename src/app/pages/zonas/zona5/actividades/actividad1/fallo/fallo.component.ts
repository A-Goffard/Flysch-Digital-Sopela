import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackComponentComponent } from "../../../../../../shared/back-component/back-component.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-zona5-actividad1-fallo1',
  standalone: true,
  imports: [BackComponentComponent, CommonModule],
  templateUrl: './fallo.component.html',
  styleUrl: './fallo.component.css'
})
export class FalloComponent {
  constructor(private router: Router) {}

  volverIntentar() {
    this.router.navigate(['/zona5/actividades/actividad1']);
  }

  siguiente() {
    this.router.navigate(['/zona5']);
  }
}
