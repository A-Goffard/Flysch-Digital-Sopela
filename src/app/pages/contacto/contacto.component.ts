import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackComponentComponent } from "../../shared/back-component/back-component.component";

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [BackComponentComponent],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  constructor(private router: Router ) {}

  goToHome() {
    this.salida(() => {
      this.router.navigate(['/home']);
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

