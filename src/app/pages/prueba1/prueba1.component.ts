import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-prueba1',
  standalone: true,
  imports: [/* GoogleMapsModule */CommonModule],
  templateUrl: './prueba1.component.html',
  styleUrls: ['./prueba1.component.css']
})
export class Prueba1Component {

  respuestaCorrecta = false;
  respuestaIncorrecta = false;
  mostrarLupa = false;

  constructor(private router: Router) {}

  comprobar() {
    const respuestas = document.getElementsByName('pregunta1') as NodeListOf<HTMLInputElement>;
    let respuestaSeleccionada: string | null = null;

    for (let i = 0; i < respuestas.length; i++) {
      if (respuestas[i].checked) {
        respuestaSeleccionada = respuestas[i].value;
        break;
      }
    }

    if (respuestaSeleccionada === 'Arrietara') {
      this.respuestaCorrecta = true;
      setTimeout(() => {
        this.router.navigate(['/prueba2']);
      }, 1000); // Navegar después de 1 segundo para mostrar la animación
    } else {
      this.respuestaIncorrecta = true;
      this.mostrarLupa = true;
      setTimeout(() => {
        this.respuestaIncorrecta = false;
      }, 2000); // Ocultar la animación después de 2 segundos
    }
  }

  mostrarPista() {
    alert('Pista: Busca el nombre de la playa más cercana a la escuela de Surf de Gorka Yarritu. Google Maps seguro que te ayuda.');
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
