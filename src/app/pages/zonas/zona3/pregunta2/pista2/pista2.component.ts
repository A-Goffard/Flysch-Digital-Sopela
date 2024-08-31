import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BackComponentComponent } from '../../../../../shared/back-component/back-component.component';

@Component({
  selector: 'app-zona3-pregunta2-pista2',
  standalone: true,
  imports: [ CommonModule, BackComponentComponent ],
  templateUrl: './pista2.component.html',
  styleUrl: './pista2.component.css'
})
export class Pista2Component {
  constructor(private router: Router) {}

  volver() {
    this.router.navigate(['/zona3/pregunta2']);
  }
}