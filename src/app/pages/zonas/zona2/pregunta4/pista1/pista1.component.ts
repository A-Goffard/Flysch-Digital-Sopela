import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BackComponentComponent } from '../../../../../shared/back-component/back-component.component';

@Component({
  selector: 'app-zona2-pregunta4-pista1',
  standalone: true,
  imports: [ CommonModule, BackComponentComponent ],
  templateUrl: './pista1.component.html',
  styleUrl: './pista1.component.css'
})
export class Pista1Component {
  constructor(private router: Router) {}

  volver() {
    this.router.navigate(['/zona2/pregunta4']);
  }
}
