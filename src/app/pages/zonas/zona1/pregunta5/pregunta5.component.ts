import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BackComponentComponent } from "../../../../shared/back-component/back-component.component";

@Component({
  selector: 'app-zona1-pregunta5',
  standalone: true,
  imports: [CommonModule, RouterModule, BackComponentComponent],
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
  
    if (this.seleccion === 'Unos 70 Ma') {
      this.respuestaCorrecta = true;
      this.respuestaIncorrecta = false;
      this.respuestasCorrectas['/zona1/pregunta5'] = true;
  
      // Almacenar estado específico de la pregunta 1
      localStorage.setItem('respuestaCorrectaZona1Pregunta5', 'true');
  
      setTimeout(() => {
        this.router.navigate(['/zona1/pregunta5/explicacion5']);
      }, 1000);
    } else {
      this.respuestaCorrecta = false;
      this.respuestaIncorrecta = true;
      this.respuestasCorrectas['/zona1/pregunta5'] = false;
  
      // Almacenar estado específico de la pregunta 1
      localStorage.setItem('respuestaCorrectaZona1Pregunta5', 'false');
  
      if (this.seleccion === 'Más de 200 Ma') {
        setTimeout(() => {
          this.router.navigate(['/zona1/pregunta5/pista1']);
        }, 1000);
      } else {
        setTimeout(() => {
          this.router.navigate(['/zona1/pregunta5/pista2']);
        }, 1000);
      }
    }
  
    localStorage.setItem('respuestasCorrectas', JSON.stringify(this.respuestasCorrectas));
    localStorage.setItem('seleccionPregunta5', this.seleccion);
  }
  

  goToZona1() {
    this.router.navigate(['/zona1']);
  }

  goToExplicacion() {
    this.router.navigate(['/zona1/pregunta5/explicacion5']);
  }
  
  ngOnInit() {
    const respuestasGuardadas = localStorage.getItem('respuestasCorrectas');
    if (respuestasGuardadas) {
      this.respuestasCorrectas = JSON.parse(respuestasGuardadas);
    }
  
    const seleccionGuardada = localStorage.getItem('seleccionPregunta5');
    if (seleccionGuardada) {
      this.seleccion = seleccionGuardada;
    }
  
    // Recuperar el estado específico de la pregunta 1
    const respuestaCorrectaZona1Pregunta5 = localStorage.getItem('respuestaCorrectaZona1Pregunta5');
    this.respuestaCorrecta = respuestaCorrectaZona1Pregunta5 === 'true';
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

