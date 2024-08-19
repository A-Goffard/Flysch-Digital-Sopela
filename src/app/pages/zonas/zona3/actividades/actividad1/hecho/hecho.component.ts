import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zona3-actividad1-hecho1',
  standalone: true,
  templateUrl: './hecho.component.html',
  styleUrls: ['./hecho.component.css']  
})
export class Zona3Actividad1Hecho1Component implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/zona3']);
    }, 3000);
  }
}
