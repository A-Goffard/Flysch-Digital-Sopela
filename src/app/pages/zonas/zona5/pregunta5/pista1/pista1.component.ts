import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-zona5-pregunta5-pista1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pista1.component.html',
  styleUrl: './pista1.component.css'
})
export class Pista1Component {
  constructor(private router: Router) {}

  volver() {
    this.router.navigate(['/zona5/pregunta5']);
  }
}