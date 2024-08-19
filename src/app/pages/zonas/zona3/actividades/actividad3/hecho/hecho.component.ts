import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zona3-actividad3-hecho3',
  standalone: true,
  templateUrl: './hecho.component.html',
  styleUrls: ['./hecho.component.css']  
})
export class Zona3Actividad3Hecho3Component implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/zona3']);
    }, 3000);
  }
}
