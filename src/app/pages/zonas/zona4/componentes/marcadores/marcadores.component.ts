import { Component, AfterViewInit, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-zona4-marcadores',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './marcadores.component.html',
  styleUrls: ['./marcadores.component.css']
})
export class MarcadoresComponent implements AfterViewInit, OnInit {
  currentRouteZ4: string = '';
  respuestasCorrectasZ4: { [key: string]: boolean } = {};

  constructor(private router: Router) {}

  ngOnInit() {
    this.currentRouteZ4 = this.router.url;
    const respuestasGuardadasZ4 = localStorage.getItem('respuestasCorrectasZ4');
    if (respuestasGuardadasZ4) {
      this.respuestasCorrectasZ4 = JSON.parse(respuestasGuardadasZ4);
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

  isCurrentRouteZ4(route: string): boolean {
    return this.router.url.includes(route);
  }

  isAnsweredCorrectlyZ4(route: string): boolean {
    const respuestasCorrectasZ4 = JSON.parse(localStorage.getItem('respuestasCorrectasZ4') || '{}');
    return respuestasCorrectasZ4[route] === true;
  }

  goToPregunta1() {
    this.router.navigate(['/zona4/pregunta1']);
  }

  goToPregunta2() {
    this.router.navigate(['/zona4/pregunta2']);
  }
  goToPregunta3() {
    this.router.navigate(['/zona4/pregunta3']);
  }
  goToPregunta4() {
    this.router.navigate(['/zona4/pregunta4']);
  }
  goToPregunta5() {
    this.router.navigate(['/zona4/pregunta5']);
  }
}
