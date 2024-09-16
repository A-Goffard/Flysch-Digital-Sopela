import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BackComponentComponent } from '../../../../../shared/back-component/back-component.component';

@Component({
  selector: 'app-zona4-explicacion2',
  standalone: true,
  imports: [ CommonModule, BackComponentComponent ],
  templateUrl: './explicacion2.component.html',
  styleUrl: './explicacion2.component.css'
})
export class Explicacion2Component {
  constructor(private router: Router) {}

  volver() {
    this.router.navigate(['/zona4']);
  }
}
