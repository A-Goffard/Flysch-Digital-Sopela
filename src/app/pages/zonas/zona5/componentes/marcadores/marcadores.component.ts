import { Component, AfterViewInit, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-zona5-marcadores',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './marcadores.component.html',
  styleUrls: ['./marcadores.component.css']
})
export class MarcadoresComponent implements AfterViewInit, OnInit {
  currentRouteZ5: string = '';
  respuestasCorrectasZ5: { [key: string]: boolean } = {};

  constructor(private router: Router) {}

  ngOnInit() {
    this.currentRouteZ5 = this.router.url;
    const respuestasGuardadasZ5 = localStorage.getItem('respuestasCorrectasZ5');
    if (respuestasGuardadasZ5) {
      this.respuestasCorrectasZ5 = JSON.parse(respuestasGuardadasZ5);
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

  isCurrentRouteZ5(route: string): boolean {
    return this.router.url.includes(route);
  }

  isAnsweredCorrectlyZ5(route: string): boolean {
    const respuestasCorrectasZ5 = JSON.parse(localStorage.getItem('respuestasCorrectasZ5') || '{}');
    return respuestasCorrectasZ5[route] === true;
  }

  goToPregunta1() {
    this.router.navigate(['/zona5/pregunta1']);
  }

  goToPregunta2() {
    this.router.navigate(['/zona5/pregunta2']);
  }
  goToPregunta3() {
    this.router.navigate(['/zona5/pregunta3']);
  }
  goToPregunta4() {
    this.router.navigate(['/zona5/pregunta4']);
  }
  goToPregunta5() {
    this.router.navigate(['/zona5/pregunta5']);
  }
}
