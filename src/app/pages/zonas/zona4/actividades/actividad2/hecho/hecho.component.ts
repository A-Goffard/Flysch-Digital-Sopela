import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zona4-actividad2-hecho2',
  standalone: true,
  templateUrl: './hecho.component.html',
  styleUrls: ['./hecho.component.css']  
})
export class Zona4Actividad2Hecho2Component implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/zona4']);
    }, 3000);
  }
}
