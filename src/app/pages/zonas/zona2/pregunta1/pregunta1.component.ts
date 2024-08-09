import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-zona2-pregunta1',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pregunta1.component.html',
  styleUrl: './pregunta1.component.css'
})
export class Pregunta1Component implements OnInit {
  mostrarLupa = false;
  respuestaCorrectaZ2 = false;
  respuestaIncorrectaZ2 = false;
  respuestasCorrectasZ2: { [key: string]: boolean } = {};
  seleccion: string = '';
  comprobarPressed = false;

  constructor(private router: Router) {}
  comprobar() {
    this.comprobarPressed = true;
  
    if (this.seleccion === 'Atxabiribil') {
      this.respuestaCorrectaZ2 = true;
      this.respuestaIncorrectaZ2 = false;
      this.respuestasCorrectasZ2['/zona2/pregunta1'] = true;
  
      // Almacenar estado específico de la pregunta 1
      localStorage.setItem('respuestaCorrectaZ2Pregunta1', 'true');
  
      setTimeout(() => {
        this.router.navigate(['/zona2/pregunta2']);
      }, 2000);
    } else {
      this.respuestaCorrectaZ2 = false;
      this.respuestaIncorrectaZ2 = true;
      this.respuestasCorrectasZ2['/zona2/pregunta1'] = false;
  
      // Almacenar estado específico de la pregunta 1
      localStorage.setItem('respuestaCorrectaZ2Pregunta1Z2', 'false');
  
      if (this.seleccion === 'Arrietara') {
        setTimeout(() => {
          this.router.navigate(['/zona2/pregunta1/pista1']);
        }, 2000);
      } else {
        setTimeout(() => {
          this.router.navigate(['/zona2/pregunta1/pista2']);
        }, 2000);
      }
    }
  
    localStorage.setItem('respuestasCorrectasZ2', JSON.stringify(this.respuestasCorrectasZ2));
    localStorage.setItem('seleccionPregunta1Z2', this.seleccion);
  }
  

  goToZona2() {
    this.router.navigate(['/zona2']);
  }
  
  ngOnInit() {
    const respuestasGuardadasZ2 = localStorage.getItem('respuestasCorrectasZ2');
    if (respuestasGuardadasZ2) {
      this.respuestasCorrectasZ2 = JSON.parse(respuestasGuardadasZ2);
    }
  
    const seleccionGuardadaZ2 = localStorage.getItem('seleccionPregunta1Z2');
    if (seleccionGuardadaZ2) {
      this.seleccion = seleccionGuardadaZ2;
    }
  
    // Recuperar el estado específico de la pregunta 1
    const respuestaCorrectaZ2Pregunta1 = localStorage.getItem('respuestaCorrectaZ2Pregunta1');
    this.respuestaCorrectaZ2 = respuestaCorrectaZ2Pregunta1 === 'true';
    this.respuestaIncorrectaZ2 = !this.respuestaCorrectaZ2 && !!this.seleccion;
  }
  

  onOptionChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.seleccion = inputElement.value;
      this.comprobarPressed = false;
    }
  }
}
