import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) {}

  goToZona1() {
    this.salida(() => {
      this.router.navigate(['/zona1']);
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



  salida(callback: () => void) {
    const cont = document.getElementById('cont');

    if (cont) {
      cont.classList.remove('animate__fadeIn');
      cont.classList.add('animate__fadeOut');
    }

    setTimeout(callback, 700);
  }

}
