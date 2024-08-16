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
  currentRoute: string = '';
  respuestasCorrectas: { [key: string]: boolean } = {};
  allCompleted: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.currentRoute = this.router.url;
    const respuestasGuardadas = localStorage.getItem('respuestasCorrectas');
    if (respuestasGuardadas) {
      this.respuestasCorrectas = JSON.parse(respuestasGuardadas);
    }
    this.checkAllCompleted(); // Comprobamos si todas las preguntas y actividades están completadas
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

  isCurrentRoute(route: string): boolean {
    return this.router.url.includes(route);
  }

  isAnsweredCorrectly(route: string): boolean {
    const respuestasCorrectas = JSON.parse(localStorage.getItem('respuestasCorrectas') || '{}');
    return respuestasCorrectas[route] === true;
  }

  checkAllCompleted() {
    const requiredRoutes = [
      '/zona3/pregunta1',
      '/zona3/pregunta2',
      '/zona3/pregunta3',
      '/zona3/pregunta4',
      '/zona3/pregunta5',
      '/zona3/actividades/actividad1',
      '/zona3/actividades/actividad2',
      '/zona3/actividades/actividad3',
      '/zona3/actividades/actividad4',
      '/zona3/actividades/actividad5'
    ];

    this.allCompleted = requiredRoutes.every(route => this.isAnsweredCorrectly(route));
  }

  masInfo() {
    this.router.navigate(['/zona3/mas-info']); // Navega a la página de explicaciones
  }
}
