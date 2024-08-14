import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BackComponentComponent } from "../../../../shared/back-component/back-component.component";

@Component({
  selector: 'app-zona2-pregunta1',
  standalone: true,
  imports: [CommonModule, RouterModule, BackComponentComponent],
  templateUrl: './pregunta1.component.html',
  styleUrl: './pregunta1.component.css'
})
export class Pregunta1Component implements OnInit {
  mostrarLupa = false;
  respuestaCorrectaZ2 = false;
  respuestaIncorrectaZ2 = false;
  respuestasCorrectasZ2: { [key: string]: boolean } = {};
  seleccionZ2: string = '';
  comprobarPressedZ2 = false;

  constructor(private router: Router) {}
  comprobar() {
    this.comprobarPressedZ2 = true;
  
    if (this.seleccionZ2 === 'Roja') {
      this.respuestaCorrectaZ2 = true;
      this.respuestaIncorrectaZ2 = false;
      this.respuestasCorrectasZ2['/zona2/pregunta1'] = true;
  
      // Almacenar estado específico de la pregunta 1
      localStorage.setItem('respuestaCorrectaZ2Pregunta1', 'true');
  
      setTimeout(() => {
        this.router.navigate(['/zona2/pregunta1/explicacion1']);
      }, 2000);
    } else {
      this.respuestaCorrectaZ2 = false;
      this.respuestaIncorrectaZ2 = true;
      this.respuestasCorrectasZ2['/zona2/pregunta1'] = false;
  
      // Almacenar estado específico de la pregunta 1
      localStorage.setItem('respuestaCorrectaZ2Pregunta1', 'false');
  
      if (this.seleccionZ2 === 'Blanca') {
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
    localStorage.setItem('seleccionZ2Pregunta1Z2', this.seleccionZ2);
  }
  

  goToZona2() {
    this.router.navigate(['/zona2']);
  }
  
  ngOnInit() {
    const respuestasGuardadasZ2 = localStorage.getItem('respuestasCorrectasZ2');
    if (respuestasGuardadasZ2) {
      this.respuestasCorrectasZ2 = JSON.parse(respuestasGuardadasZ2);
    }
  
    const seleccionZ2GuardadaZ2 = localStorage.getItem('seleccionZ2Pregunta1Z2');
    if (seleccionZ2GuardadaZ2) {
      this.seleccionZ2 = seleccionZ2GuardadaZ2;
    }
  
    // Recuperar el estado específico de la pregunta 1
    const respuestaCorrectaZ2Pregunta1 = localStorage.getItem('respuestaCorrectaZ2Pregunta1');
    this.respuestaCorrectaZ2 = respuestaCorrectaZ2Pregunta1 === 'true';
    this.respuestaIncorrectaZ2 = !this.respuestaCorrectaZ2 && !!this.seleccionZ2;
  }
  

  onOptionChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.seleccionZ2 = inputElement.value;
      this.comprobarPressedZ2 = false;
    }
  }
}
