import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BackComponentComponent } from '../../../../../shared/back-component/back-component.component';

@Component({
  selector: 'app-zona4-explicacion1',
  standalone: true,
  imports: [ CommonModule, BackComponentComponent ],
  templateUrl: './explicacion1.component.html',
  styleUrl: './explicacion1.component.css'
})
export class Explicacion1Component {
  constructor(private router: Router) {}

  volver() {
    this.router.navigate(['/zona4']);
  }
}
