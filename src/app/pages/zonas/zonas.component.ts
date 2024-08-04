import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { Zona1Component } from './zona1/zona1.component';
import { Zona2Component } from './zona2/zona2.component';
import { Zona3Component } from './zona3/zona3.component';
import { Zona4Component } from './zona4/zona4.component';
import { Zona5Component } from './zona5/zona5.component';

@Component({
  selector: 'app-zonas',
  standalone: true,
  imports: [],
  templateUrl: './zonas.component.html',
  styleUrl: './zonas.component.css'
})

export class ZonasComponent {
  constructor(private router: Router) {}

  goToZona1() {
    this.salida(() => {
      this.router.navigate(['/zona1']);
    });
  }

  goToZona2() {
    this.salida(() => {
      this.router.navigate(['/zona2']);
    });
  }


  goToZona3() {
    this.salida(() => {
      this.router.navigate(['/zona3']);
    });
  }

  goToZona4() {
    this.salida(() => {
      this.router.navigate(['/zona4']);
    });
  }

  goToZona5() {
    this.salida(() => {
      this.router.navigate(['/zona5']);
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

export const routes: Routes = [

  { path: 'zonas', component: ZonasComponent, children: [
    { path: 'zona1', component: Zona1Component },
    { path: 'zona2', component: Zona2Component },
    { path: 'zona3', component: Zona3Component },
    { path: 'zona4', component: Zona4Component },
    { path: 'zona5', component: Zona5Component },
  ]},

];
