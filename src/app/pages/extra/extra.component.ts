import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-extra',
  standalone: true,
  imports: [],
  templateUrl: './extra.component.html',
  styleUrl: './extra.component.css'
})
export class ExtraComponent {

  constructor(private router: Router) {}

  goToZonas() {
    this.salida(() => {
      this.router.navigate(['/zonas']);
    });
  }

  goToContext() {
    this.salida(() => {
      this.router.navigate(['/context']);
    });
  }


  goToInstructions() {
    this.salida(() => {
      this.router.navigate(['/instructions']);
    });
  }

  goToContact() {
    this.salida(() => {
      this.router.navigate(['/contact']);
    });
  }

  salida(callback: () => void) {
    const cont = document.getElementById('cont');

    if (cont) {
      cont.classList.remove('animate__fadeIn');
      cont.classList.add('animate__fadeOut');
    }

    setTimeout(callback, 700);
  }

}
