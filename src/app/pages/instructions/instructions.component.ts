import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructions',
  standalone: true,
  imports: [],
  templateUrl: './instructions.component.html',
  styleUrl: './instructions.component.css'
})
export class InstructionsComponent {

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
