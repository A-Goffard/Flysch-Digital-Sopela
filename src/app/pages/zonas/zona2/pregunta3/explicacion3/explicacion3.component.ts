import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-zona2-explicacion3',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './explicacion3.component.html',
  styleUrl: './explicacion3.component.css'
})
export class Explicacion3Component {
  constructor(private router: Router) {}

  volver() {
    this.router.navigate(['/zona2/pregunta4']);
  }
}
