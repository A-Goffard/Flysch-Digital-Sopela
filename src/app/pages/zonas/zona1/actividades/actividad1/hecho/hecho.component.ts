import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackComponentComponent } from "../../../../../../shared/back-component/back-component.component";

@Component({
  selector: 'app-zona1-hecho',
  standalone: true,
  imports: [BackComponentComponent],
  templateUrl: './hecho.component.html',
  styleUrl: './hecho.component.css'
})
export class Zona1Actividad1Hecho1Component {
constructor(private router: Router) {}
siguiente() {
  this.router.navigate(['/zona1']);
}
}
