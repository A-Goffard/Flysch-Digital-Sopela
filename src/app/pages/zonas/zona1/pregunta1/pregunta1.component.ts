import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zona1-pregunta1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pregunta1.component.html',
  styleUrls: ['./pregunta1.component.css']
})
export class Pregunta1Component implements OnInit {
  mostrarLupa = false;
  respuestaCorrecta = false;
  respuestaIncorrecta = false;
  respuestasCorrectas: { [key: string]: boolean } = {};
  seleccion: string = '';
  comprobarPressed = false;

  constructor(private router: Router) {}

  comprobar() {
    this.comprobarPressed = true;
    
    if (this.seleccion === 'Atxabiribil') {
      this.respuestaCorrecta = true;
      this.respuestaIncorrecta = false;
      this.respuestasCorrectas['pregunta1'] = true;

      setTimeout(() => {
        this.router.navigate(['/zona1/pregunta2']);
      }, 2000);

    } else {
      this.respuestaCorrecta = false;
      this.respuestaIncorrecta = true;
      this.respuestasCorrectas['pregunta1'] = false;

      // Redirigir a 'pista1' después de 2 segundos si la respuesta es incorrecta
      setTimeout(() => {
        this.router.navigate(['pista1']);
      }, 2000);
    }

    localStorage.setItem('respuestasCorrectas', JSON.stringify(this.respuestasCorrectas));
    localStorage.setItem('seleccionPregunta1', this.seleccion);
  }

  ngOnInit() {
    const respuestasGuardadas = localStorage.getItem('respuestasCorrectas');
    if (respuestasGuardadas) {
      this.respuestasCorrectas = JSON.parse(respuestasGuardadas);
      this.respuestaCorrecta = this.respuestasCorrectas['pregunta1'] ?? false;
      this.respuestaIncorrecta = !this.respuestaCorrecta && !!this.seleccion;
    }

    const seleccionGuardada = localStorage.getItem('seleccionPregunta1');
    if (seleccionGuardada) {
      this.seleccion = seleccionGuardada;
    }
  }

  onOptionChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.seleccion = inputElement.value;
      this.comprobarPressed = false;  // Resetear la variable cuando se selecciona una nueva opción
    }
  }
}
