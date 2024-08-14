import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-explicacion5',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './explicacion5.component.html',
  styleUrl: './explicacion5.component.css'
})
export class Explicacion5Component {
  constructor(private router: Router) {}

  volver() {
    this.router.navigate(['/zona3/actividades/actividad1']);
  }
}
