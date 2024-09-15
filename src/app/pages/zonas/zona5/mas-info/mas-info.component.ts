import { Component } from '@angular/core';
import { BackComponentComponent } from "../../../../shared/back-component/back-component.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zona5-mas-info',
  standalone: true,
  imports: [BackComponentComponent, CommonModule],
  templateUrl: './mas-info.component.html',
  styleUrl: './mas-info.component.css'
})
export class MasInfoComponent {
  constructor(private router: Router) {}
  portal() {
    this.router.navigate(['/portal']);
  }
}
