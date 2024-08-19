import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zona1-actividad4-hecho4',
  standalone: true,
  templateUrl: './hecho.component.html',
  styleUrls: ['./hecho.component.css']  
})
export class Zona1Actividad4Hecho4Component implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/zona1']);
    }, 3000);
  }
}
