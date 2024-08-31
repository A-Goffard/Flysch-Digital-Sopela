import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BackComponentComponent } from '../../../../../shared/back-component/back-component.component';

@Component({
  selector: 'app-zona3-explicacion5',
  standalone: true,
  imports: [ CommonModule, BackComponentComponent ],
  templateUrl: './explicacion5.component.html',
  styleUrl: './explicacion5.component.css'
})
export class Explicacion5Component {
  constructor(private router: Router) {}

  volver() {
    this.router.navigate(['/zona3/actividades/actividad1']);
  }
}
