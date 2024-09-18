import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackComponentComponent } from "../../shared/back-component/back-component.component";

@Component({
  selector: 'app-context',
  standalone: true,
  imports: [BackComponentComponent],
  templateUrl: './context.component.html',
  styleUrl: './context.component.css'
})
export class ContextComponent {

  constructor(private router: Router) {}

  goToPrueba1() {
    this.salida(() => {
      this.router.navigate(['/zonas']);
    });
  }

  goToContact() {
    this.salida(() => {
      this.router.navigate(['/contact']);
    });
  }

  goToZonas() {
    this.salida(() => {
      this.router.navigate(['/zonas']);
    });
  }

  goToInstructions() {
    this.salida(() => {
      this.router.navigate(['/instructions']);
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
