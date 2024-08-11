import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-zona5-pregunta2-pista2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pista2.component.html',
  styleUrl: './pista2.component.css'
})
export class Pista2Component {
  constructor(private router: Router) {}

  volver() {
    this.router.navigate(['/zona5/pregunta2']);
  }
}