import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackComponentComponent } from "../../../../../../shared/back-component/back-component.component";

@Component({
  selector: 'app-zona2-actividad5-hecho5',
  standalone: true,
  templateUrl: './hecho.component.html',
  styleUrls: ['./hecho.component.css'],
  imports: [BackComponentComponent]  
})
export class Zona2Actividad5Hecho5Component {
  constructor(private router: Router) {}
  siguiente() {
    this.router.navigate(['/zona2']);
  }
  }