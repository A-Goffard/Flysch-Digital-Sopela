import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-context',
  standalone: true,
  imports: [],
  templateUrl: './context.component.html',
  styleUrl: './context.component.css'
})
export class ContextComponent {

  constructor(private router: Router) {}

  goToPrueba1() {
    this.salida(() => {
      this.router.navigate(['/prueba1']);
    });
  }

  goToContact() {
    this.salida(() => {
      this.router.navigate(['/contact']);
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
