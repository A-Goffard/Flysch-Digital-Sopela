import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BackComponentComponent } from '../../../../../shared/back-component/back-component.component';

@Component({
  selector: 'app-zona1-explicacion3',
  standalone: true,
  imports: [ CommonModule, BackComponentComponent ],
  templateUrl: './explicacion3.component.html',
  styleUrl: './explicacion3.component.css'
})
export class Explicacion3Component {
  constructor(private router: Router) {}

  volver() {
    this.router.navigate(['/zona1']);
  }
}
