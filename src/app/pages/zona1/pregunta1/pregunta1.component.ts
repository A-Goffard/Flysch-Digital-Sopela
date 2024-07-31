import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pregunta1',
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

  constructor(private router: Router) {}

  comprobar() {
    if (this.seleccion === 'Atxabiribil') {
      this.respuestaCorrecta = true;
      this.respuestaIncorrecta = false;
      this.respuestasCorrectas['pregunta1'] = true;
    } else {
      this.respuestaCorrecta = false;
      this.respuestaIncorrecta = true;
      this.respuestasCorrectas['pregunta1'] = false;
    }

    localStorage.setItem('respuestasCorrectas', JSON.stringify(this.respuestasCorrectas));
    localStorage.setItem('seleccionPregunta1', this.seleccion);
  }

  mostrarPista() {
    // Simular mostrar pista
    this.mostrarLupa = true;
    // Despues de mostrar la pista, simular una redireccion (realizar alguna accion si es necesario)
    setTimeout(() => {
      this.router.navigate(['/pista1']);
    }, 2000); // Por ejemplo, 2 segundos después de mostrar la pista
  }

  ngOnInit() {
    const respuestasGuardadas = localStorage.getItem('respuestasCorrectas');
    if (respuestasGuardadas) {
      this.respuestasCorrectas = JSON.parse(respuestasGuardadas);
      if (this.respuestasCorrectas['pregunta1']) {
        this.respuestaCorrecta = true;
        this.respuestaIncorrecta = false;
      }
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
    }
  }
}
