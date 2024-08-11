import { Component, AfterViewInit, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-zona3-marcadores',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './marcadores.component.html',
  styleUrls: ['./marcadores.component.css']
})
export class MarcadoresComponent implements AfterViewInit, OnInit {
  currentRouteZ3: string = '';
  respuestasCorrectasZ3: { [key: string]: boolean } = {};

  constructor(private router: Router) {}

  ngOnInit() {
    this.currentRouteZ3 = this.router.url;
    const respuestasGuardadasZ3 = localStorage.getItem('respuestasCorrectasZ3');
    if (respuestasGuardadasZ3) {
      this.respuestasCorrectasZ3 = JSON.parse(respuestasGuardadasZ3);
    }
  }

  ngAfterViewInit() {
    // Animar los marcadores uno por uno
    const marcadores = document.querySelectorAll('.marcadores');
    marcadores.forEach((marcador, index) => {
      setTimeout(() => {
        marcador.classList.add('animate');
        setTimeout(() => {
          marcador.classList.remove('animate');
        }, 500);
      }, index * 300);
    });

    // Girar la mariposita después de 3 segundos
    const navZonas = document.querySelector('app-nav-zonas');
    const mariposita = navZonas?.querySelector('.mariposita');
    if (mariposita) {
      setTimeout(() => {
        mariposita.classList.add('rotate');
      }, 2000);
    }
  }

  isCurrentRouteZ3(route: string): boolean {
    return this.router.url.includes(route);
  }

  isAnsweredCorrectlyZ3(route: string): boolean {
    const respuestasCorrectasZ3 = JSON.parse(localStorage.getItem('respuestasCorrectasZ3') || '{}');
    return respuestasCorrectasZ3[route] === true;
  }

  goToPregunta1() {
    this.router.navigate(['/zona3/pregunta1']);
  }

  goToPregunta2() {
    this.router.navigate(['/zona3/pregunta2']);
  }
  goToPregunta3() {
    this.router.navigate(['/zona3/pregunta3']);
  }
  goToPregunta4() {
    this.router.navigate(['/zona3/pregunta4']);
  }
  goToPregunta5() {
    this.router.navigate(['/zona3/pregunta5']);
  }
}
