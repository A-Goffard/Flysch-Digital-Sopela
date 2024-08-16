import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-zona3-explicacion1',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './explicacion1.component.html',
  styleUrl: './explicacion1.component.css'
})
export class Explicacion1Component {
  constructor(private router: Router) {}

  volver() {
    this.router.navigate(['/zona3/pregunta2']);
  }
}
