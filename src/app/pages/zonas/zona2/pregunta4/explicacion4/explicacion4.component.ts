import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BackComponentComponent } from '../../../../../shared/back-component/back-component.component';

@Component({
  selector: 'app-zona2-explicacion4',
  standalone: true,
  imports: [ CommonModule, BackComponentComponent ],
  templateUrl: './explicacion4.component.html',
  styleUrl: './explicacion4.component.css'
})
export class Explicacion4Component {
  constructor(private router: Router) {}

  volver() {
    this.router.navigate(['/zona2']);
  }
}
