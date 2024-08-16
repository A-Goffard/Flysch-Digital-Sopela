import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-zona5-explicacion2',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './explicacion2.component.html',
  styleUrl: './explicacion2.component.css'
})
export class Explicacion2Component {
  constructor(private router: Router) {}

  volver() {
    this.router.navigate(['/zona5/pregunta23']);
  }
}
