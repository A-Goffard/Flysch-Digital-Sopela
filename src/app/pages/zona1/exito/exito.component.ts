import { Component } from '@angular/core';
import { Router } from 'express';

@Component({
  selector: 'app-exito',
  standalone: true,
  imports: [],
  templateUrl: './exito.component.html',
  styleUrl: './exito.component.css'
})
export class ExitoComponent {

  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      const cont = document.getElementById('cont');

      if (cont) {
        cont.classList.remove('animate__fadeIn');
        cont.classList.add('animate__fadeOut');
      }

    }, 7000); // 7000ms = 7 segundos
  }

}
