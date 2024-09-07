import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackComponentComponent } from "../../../../../../shared/back-component/back-component.component";

@Component({
  selector: 'app-zona1-actividad3-hecho3',
  standalone: true,
  templateUrl: './hecho.component.html',
  styleUrls: ['./hecho.component.css'],
  imports: [BackComponentComponent]  
})
export class Zona1Actividad3Hecho3Component {
  constructor(private router: Router) {}
  siguiente() {
    this.router.navigate(['/zona1']);
  }
}