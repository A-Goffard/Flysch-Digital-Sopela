import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BackComponentComponent } from "../../../../shared/back-component/back-component.component";

@Component({
  selector: 'app-zona1-pregunta2',
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
  
    if (this.seleccion === 'Arcilla') {
      this.respuestaCorrecta = true;
      this.respuestaIncorrecta = false;
      this.respuestasCorrectas['/zona1/pregunta2'] = true;
  
      // Almacenar estado específico de la pregunta 2
      localStorage.setItem('respuestaCorrectaPregunta2', 'true');
  
      setTimeout(() => {
        this.router.navigate(['/zona1/pregunta2/explicacion2']);
      }, 2000);
    } else {
      this.respuestaCorrecta = false;
      this.respuestaIncorrecta = true;
      this.respuestasCorrectas['/zona1/pregunta2'] = false;
  
      // Almacenar estado específico de la pregunta 2
      localStorage.setItem('respuestaCorrectaPregunta2', 'false');
  
      if (this.seleccion === 'Marga') {
        setTimeout(() => {
          this.router.navigate(['/zona1/pregunta2/pista1']);
        }, 2000);
      } else {
        setTimeout(() => {
          this.router.navigate(['/zona1/pregunta2/pista2']);
        }, 2000);
      }
    }
  
    localStorage.setItem('respuestasCorrectas', JSON.stringify(this.respuestasCorrectas));
    localStorage.setItem('seleccionPregunta2', this.seleccion);
  }
  

  goToZona1() {
    this.router.navigate(['/zona1']);
  }

  goToExplicacion() {
    this.router.navigate(['/zona1/pregunta2/explicacion2']);
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
  
    // Recuperar el estado específico de la pregunta 2
    const respuestaCorrectaPregunta2 = localStorage.getItem('respuestaCorrectaPregunta2');
    this.respuestaCorrecta = respuestaCorrectaPregunta2 === 'true';
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
