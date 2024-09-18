import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BackComponentComponent } from "../../../../shared/back-component/back-component.component";


@Component({
  selector: 'app-zona5-pregunta2',
  standalone: true,
  imports: [CommonModule, RouterModule, BackComponentComponent],
  templateUrl: './pregunta2.component.html',
  styleUrl: './pregunta2.component.css'
})
export class Pregunta2Component implements OnInit {
  mostrarLupa = false;
  respuestaCorrecta = false;
  respuestaIncorrecta = false;
  respuestasCorrectas: { [key: string]: boolean } = {};
  seleccion: string = '';
  comprobarPressed = false;

  constructor(private router: Router) {}
  comprobar() {
    this.comprobarPressed = true;
  
    if (this.seleccion === 'Calizas, margas y areniscas') {
      this.respuestaCorrecta = true;
      this.respuestaIncorrecta = false;
      this.respuestasCorrectas['/zona5/pregunta2'] = true;
  
      // Almacenar estado específico de la pregunta 1
      localStorage.setItem('respuestaCorrectaZona5Pregunta2', 'true');
  
      setTimeout(() => {
        this.router.navigate(['/zona5/pregunta2/explicacion2']);
      }, 1000);
    } else {
      this.respuestaCorrecta = false;
      this.respuestaIncorrecta = true;
      this.respuestasCorrectas['/zona5/pregunta2'] = false;
  
      // Almacenar estado específico de la pregunta 1
      localStorage.setItem('respuestaCorrectaZona5Pregunta2', 'false');
  
      if (this.seleccion === 'Calizas y margas') {
        setTimeout(() => {
          this.router.navigate(['/zona5/pregunta2/pista1']);
        }, 1000);
      } else {
        setTimeout(() => {
          this.router.navigate(['/zona5/pregunta2/pista2']);
        }, 1000);
      }
    }
  
    localStorage.setItem('respuestasCorrectas', JSON.stringify(this.respuestasCorrectas));
    localStorage.setItem('seleccionPregunta2', this.seleccion);
  }
  

  goToZona5() {
    this.router.navigate(['/zona5']);
  }
  
  goToExplicacion() {
    this.router.navigate(['/zona5/pregunta2/explicacion2']);
  }

  ngOnInit() {
    const respuestasGuardadas = localStorage.getItem('respuestasCorrectas');
    if (respuestasGuardadas) {
      this.respuestasCorrectas = JSON.parse(respuestasGuardadas);
    }
  
    const seleccionGuardada = localStorage.getItem('seleccionPregunta2');
    if (seleccionGuardada) {
      this.seleccion = seleccionGuardada;
    }
  
    // Recuperar el estado específico de la pregunta 1
    const respuestaCorrectaZona5Pregunta2 = localStorage.getItem('respuestaCorrectaZona5Pregunta2');
    this.respuestaCorrecta = respuestaCorrectaZona5Pregunta2 === 'true';
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