import { Component } from '@angular/core';
import { BackComponentComponent } from "../../../../shared/back-component/back-component.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-zona4-mas-info',
  standalone: true,
  imports: [BackComponentComponent],
  templateUrl: './mas-info.component.html',
  styleUrl: './mas-info.component.css'
})
export class MasInfoComponent {
  constructor(private router: Router) {}

  volver() {
    this.router.navigate(['/zonas']);
  }
}
