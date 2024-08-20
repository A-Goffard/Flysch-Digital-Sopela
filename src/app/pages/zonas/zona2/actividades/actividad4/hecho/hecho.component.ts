import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackComponentComponent } from "../../../../../../shared/back-component/back-component.component";

@Component({
  selector: 'app-zona2-actividad4-hecho4',
  standalone: true,
  templateUrl: './hecho.component.html',
  styleUrls: ['./hecho.component.css'],
  imports: [BackComponentComponent]  
})
export class Zona2Actividad4Hecho4Component {
  constructor(private router: Router) {}
  siguiente() {
    this.router.navigate(['/zona2']);
  }
  }
