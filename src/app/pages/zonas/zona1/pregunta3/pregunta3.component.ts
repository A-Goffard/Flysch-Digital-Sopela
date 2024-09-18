import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BackComponentComponent } from "../../../../shared/back-component/back-component.component";

@Component({
  selector: 'app-zona1-pregunta3',
  standalone: true,
  imports: [CommonModule, RouterModule, BackComponentComponent],
  templateUrl: './pregunta3.component.html',
  styleUrl: './pregunta3.component.css'
})
export class Pregunta3Component implements OnInit {
  mostrarLupa = false;
  respuestaCorrecta = false;
  respuestaIncorrecta = false;
  respuestasCorrectas: { [key: string]: boolean } = {};
  seleccion: string = '';
  comprobarPressed = false;

  constructor(private router: Router) {}
  comprobar() {
    this.comprobarPressed = true;
  
    if (this.seleccion === 'Más de 200 Ma') {
      this.respuestaCorrecta = true;
      this.respuestaIncorrecta = false;
      this.respuestasCorrectas['/zona1/pregunta3'] = true;
  
      // Almacenar estado específico de la pregunta 2
      localStorage.setItem('respuestaCorrectaZona1Pregunta3', 'true');
  
      setTimeout(() => {
        this.router.navigate(['/zona1/pregunta3/explicacion3']);
      }, 1000);
    } else {
      this.respuestaCorrecta = false;
      this.respuestaIncorrecta = true;
      this.respuestasCorrectas['/zona1/pregunta3'] = false;
  
      // Almacenar estado específico de la pregunta 2
      localStorage.setItem('respuestaCorrectaZona1Pregunta3', 'false');
  
      if (this.seleccion === '54 Ma') {
        setTimeout(() => {
          this.router.navigate(['/zona1/pregunta3/pista1']);
        }, 1000);
      } else {
        setTimeout(() => {
          this.router.navigate(['/zona1/pregunta3/pista2']);
        }, 1000);
      }
    }
  
    localStorage.setItem('respuestasCorrectas', JSON.stringify(this.respuestasCorrectas));
    localStorage.setItem('seleccionPregunta3', this.seleccion);
  }
  
  goToZona1() {
    this.router.navigate(['/zona1']);
  }

  goToExplicacion() {
    this.router.navigate(['/zona1/pregunta3/explicacion3']);
  }

  ngOnInit() {
    const respuestasGuardadas = localStorage.getItem('respuestasCorrectas');
    if (respuestasGuardadas) {
      this.respuestasCorrectas = JSON.parse(respuestasGuardadas);
    }
  
    const seleccionGuardada = localStorage.getItem('seleccionPregunta3');
    if (seleccionGuardada) {
      this.seleccion = seleccionGuardada;
    }
  
    // Recuperar el estado específico de la pregunta 2
    const respuestaCorrectaZona1Pregunta3 = localStorage.getItem('respuestaCorrectaZona1Pregunta3');
    this.respuestaCorrecta = respuestaCorrectaZona1Pregunta3 === 'true';
    this.respuestaIncorrecta = !this.respuestaCorrecta && !!this.seleccion;
  }
  

  onOptionChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.seleccion = inputElement.value;
      this.comprobarPressed = false;
    }
  }
}

