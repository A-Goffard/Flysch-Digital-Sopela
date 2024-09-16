import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackComponentComponent } from "../../shared/back-component/back-component.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-zonas',
  standalone: true,
  imports: [BackComponentComponent, CommonModule],
  templateUrl: './zonas.component.html',
  styleUrl: './zonas.component.css'
})
export class ZonasComponent implements OnInit {
  respuestasCorrectas: { [key: string]: boolean } = {};

  requiredRoutesMap: { [key: string]: string[] } = {
    '1': [
      '/zona1/pregunta1',
      '/zona1/pregunta2',
      '/zona1/pregunta3',
      '/zona1/pregunta4',
      '/zona1/pregunta5',
      '/zona1/actividades/actividad1',
    ],
    '2': [
      '/zona2/pregunta1',
      '/zona2/pregunta2',
      '/zona2/pregunta3',
      '/zona2/pregunta4',
      '/zona2/pregunta5',
      '/zona2/actividades/actividad1',
    ],
    '3': [
      '/zona3/pregunta1',
      '/zona3/pregunta2',
      '/zona3/pregunta3',
      '/zona3/pregunta4',
      '/zona3/pregunta5',
      '/zona3/actividades/actividad1',
      '/zona3/actividades/actividad2',
      '/zona3/actividades/actividad3',
      '/zona3/actividades/actividad4',
    ],
    '4': [
      '/zona4/pregunta1',
      '/zona4/pregunta2',
      '/zona4/pregunta3',
      '/zona4/pregunta4',
      '/zona4/pregunta5',
      '/zona4/actividades/actividad1',
      '/zona4/actividades/actividad2',
    ],
    '5': [
      '/zona5/pregunta1',
      '/zona5/pregunta2',
      '/zona5/pregunta3',
      '/zona5/pregunta4',
      '/zona5/pregunta5',
      '/zona5/actividades/actividad1',
      '/zona5/actividades/actividad2',
    ],
  };

  constructor(private router: Router) {}

  ngOnInit() {
    // Leer el estado guardado en localStorage
    const respuestasGuardadas = localStorage.getItem('respuestasCorrectas');
    if (respuestasGuardadas) {
      this.respuestasCorrectas = JSON.parse(respuestasGuardadas);
    }
  }

  isZonaCompleted(zona: string): boolean {
    const requiredRoutes = this.requiredRoutesMap[zona]; // Usar this para acceder a requiredRoutesMap
  
    if (!requiredRoutes) {
      return false; // Si no se definen rutas para esa zona, asumimos que no está completada
    }
  
    // Verificar si todas las rutas requeridas están marcadas como correctas
    return requiredRoutes.every((route: string) => this.respuestasCorrectas[route] === true);
  }

  // Nueva función para verificar si todas las zonas están completadas
  areAllZonasCompleted(): boolean {
    return Object.keys(this.requiredRoutesMap).every((zona: string) => this.isZonaCompleted(zona));
  }

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

  portal() {
    this.router.navigate(['/portal']);
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
