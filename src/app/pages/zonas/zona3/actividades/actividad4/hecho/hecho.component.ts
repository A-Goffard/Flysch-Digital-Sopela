import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zona3-actividad4-hecho4',
  standalone: true,
  templateUrl: './hecho.component.html',
  styleUrls: ['./hecho.component.css']  
})
export class Zona3Actividad4Hecho4Component implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/zona3']);
    }, 3000);
  }
}
