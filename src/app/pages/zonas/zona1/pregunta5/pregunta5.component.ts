import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-zona1-pregunta5',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pregunta5.component.html',
  styleUrl: './pregunta5.component.css'
})
export class Pregunta5Component implements OnInit {
  mostrarLupa = false;
  respuestaCorrecta = false;
  respuestaIncorrecta = false;
  respuestasCorrectas: { [key: string]: boolean } = {};
  seleccion: string = '';
  comprobarPressed = false;

  constructor(private router: Router) {}
  comprobar() {
    this.comprobarPressed = true;
  
    if (this.seleccion === 'Sedimentaria') {
      this.respuestaCorrecta = true;
      this.respuestaIncorrecta = false;
      this.respuestasCorrectas['/zona1/pregunta1'] = true;
  
      // Almacenar estado específico de la pregunta 1
      localStorage.setItem('respuestaCorrectaPregunta1', 'true');
  
      setTimeout(() => {
        this.router.navigate(['/zona1/pregunta2']);
      }, 2000);
    } else {
      this.respuestaCorrecta = false;
      this.respuestaIncorrecta = true;
      this.respuestasCorrectas['/zona1/pregunta1'] = false;
  
      // Almacenar estado específico de la pregunta 1
      localStorage.setItem('respuestaCorrectaPregunta1', 'false');
  
      if (this.seleccion === 'Metamórfica') {
        setTimeout(() => {
          this.router.navigate(['/zona1/pregunta1/pista1']);
        }, 2000);
      } else {
        setTimeout(() => {
          this.router.navigate(['/zona1/pregunta1/pista2']);
        }, 2000);
      }
    }
  
    localStorage.setItem('respuestasCorrectas', JSON.stringify(this.respuestasCorrectas));
    localStorage.setItem('seleccionPregunta1', this.seleccion);
  }
  

  goToZona1() {
    console.log('Navigating to Zona 1');
    this.router.navigate(['/zona1']);
  }
  
  ngOnInit() {
    const respuestasGuardadas = localStorage.getItem('respuestasCorrectas');
    if (respuestasGuardadas) {
      this.respuestasCorrectas = JSON.parse(respuestasGuardadas);
    }
  
    const seleccionGuardada = localStorage.getItem('seleccionPregunta1');
    if (seleccionGuardada) {
      this.seleccion = seleccionGuardada;
    }
  
    // Recuperar el estado específico de la pregunta 1
    const respuestaCorrectaPregunta1 = localStorage.getItem('respuestaCorrectaPregunta1');
    this.respuestaCorrecta = respuestaCorrectaPregunta1 === 'true';
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

