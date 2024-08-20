import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackComponentComponent } from "../../../../../../shared/back-component/back-component.component";

@Component({
  selector: 'app-zona5-actividad1-hecho1',
  standalone: true,
  templateUrl: './hecho.component.html',
  styleUrls: ['./hecho.component.css'],
  imports: [BackComponentComponent]  
})
export class Zona5Actividad1Hecho1Component {
  constructor(private router: Router) {}
  siguiente() {
    this.router.navigate(['/zona5']);
  }
}