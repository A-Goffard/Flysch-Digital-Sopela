import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-zona5-explicacion4',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './explicacion4.component.html',
  styleUrl: './explicacion4.component.css'
})
export class Explicacion4Component {
  constructor(private router: Router) {}

  volver() {
    this.router.navigate(['/zona5/pregunta5']);
  }
}
