import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-zona1-pregunta4',
  standalone: true,
  imports: [CommonModule, RouterModule],  
  templateUrl: './pregunta4.component.html',
  styleUrl: './pregunta4.component.css'
})
export class Pregunta4Component implements OnInit {
  mostrarLupa = false;
  respuestaCorrecta = false;
  respuestaIncorrecta = false;
  respuestasCorrectas: { [key: string]: boolean } = {};
  seleccion: string = '';
  comprobarPressed = false;

  constructor(private router: Router) {}
  comprobar() {
    this.comprobarPressed = true;
  
    if (this.seleccion === 'Herrerasaurus') {
      this.respuestaCorrecta = true;
      this.respuestaIncorrecta = false;
      this.respuestasCorrectas['/zona1/pregunta4'] = true;
  
      // Almacenar estado específico de la pregunta 2
      localStorage.setItem('respuestaCorrectaPregunta4', 'true');
  
      setTimeout(() => {
        this.router.navigate(['/zona1/pregunta5']);
      }, 2000);
    } else {
      this.respuestaCorrecta = false;
      this.respuestaIncorrecta = true;
      this.respuestasCorrectas['/zona1/pregunta4'] = false;
  
      // Almacenar estado específico de la pregunta 2
      localStorage.setItem('respuestaCorrectaPregunta4', 'false');
  
      if (this.seleccion === 'Triceratops') {
        setTimeout(() => {
          this.router.navigate(['/zona1/pregunta4/pista1']);
        }, 2000);
      } else {
        setTimeout(() => {
          this.router.navigate(['/zona1/pregunta4/pista2']);
        }, 2000);
      }
    }
  
    localStorage.setItem('respuestasCorrectas', JSON.stringify(this.respuestasCorrectas));
    localStorage.setItem('seleccionPregunta4', this.seleccion);
  }
  

  goToZona1() {
    this.router.navigate(['/zona1']);
  }

  ngOnInit() {
    const respuestasGuardadas = localStorage.getItem('respuestasCorrectas');
    if (respuestasGuardadas) {
      this.respuestasCorrectas = JSON.parse(respuestasGuardadas);
    }
  
    const seleccionGuardada = localStorage.getItem('seleccionPregunta4');
    if (seleccionGuardada) {
      this.seleccion = seleccionGuardada;
    }
  
    // Recuperar el estado específico de la pregunta 2
    const respuestaCorrectaPregunta4 = localStorage.getItem('respuestaCorrectaPregunta4');
    this.respuestaCorrecta = respuestaCorrectaPregunta4 === 'true';
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


