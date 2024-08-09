import { Component, AfterViewInit, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-zona2-marcadores',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './marcadores.component.html',
  styleUrls: ['./marcadores.component.css']
})
export class MarcadoresComponent implements AfterViewInit, OnInit {
  currentRouteZ2: string = '';
  respuestasCorrectasZ2: { [key: string]: boolean } = {};

  constructor(private router: Router) {}

  ngOnInit() {
    this.currentRouteZ2 = this.router.url;
    const respuestasGuardadasZ2 = localStorage.getItem('respuestasCorrectasZ2');
    if (respuestasGuardadasZ2) {
      this.respuestasCorrectasZ2 = JSON.parse(respuestasGuardadasZ2);
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

  isCurrentRouteZ2(route: string): boolean {
    return this.router.url.includes(route);
  }

  isAnsweredCorrectlyZ2(route: string): boolean {
    const respuestasCorrectasZ2 = JSON.parse(localStorage.getItem('respuestasCorrectasZ2') || '{}');
    return respuestasCorrectasZ2[route] === true;
  }

  goToPregunta1() {
    this.router.navigate(['/zona2/pregunta1']);
  }

  goToPregunta2() {
    this.router.navigate(['/zona2/pregunta2']);
  }
  goToPregunta3() {
    this.router.navigate(['/zona2/pregunta3']);
  }
  goToPregunta4() {
    this.router.navigate(['/zona2/pregunta4']);
  }
  goToPregunta5() {
    this.router.navigate(['/zona2/pregunta5']);
  }
}
