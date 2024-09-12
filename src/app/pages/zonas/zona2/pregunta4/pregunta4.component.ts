import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BackComponentComponent } from "../../../../shared/back-component/back-component.component";

@Component({
  selector: 'app-zona2-pregunta4',
  standalone: true,
  imports: [CommonModule, RouterModule, BackComponentComponent],
  templateUrl: './pregunta4.component.html',
  styleUrl: './pregunta4.component.css'
})
export class Pregunta4Component implements OnInit {
  mostrarLupa = false;
  respuestaCorrectaZ2 = false;
  respuestaIncorrectaZ2 = false;
  respuestasCorrectasZ2: { [key: string]: boolean } = {};
  seleccionZ2: string = '';
  comprobarPressedZ2 = false;

  constructor(private router: Router) {}
  comprobar() {
    this.comprobarPressedZ2 = true;
  
    if (this.seleccionZ2 === 'Drácula') {
      this.respuestaCorrectaZ2 = true;
      this.respuestaIncorrectaZ2 = false;
      this.respuestasCorrectasZ2['/zona2/pregunta4'] = true;
  
      // Almacenar estado específico de la pregunta 1
      localStorage.setItem('respuestaCorrectaZ2Pregunta4', 'true');
  
      setTimeout(() => {
        this.router.navigate(['/zona2/pregunta4/explicacion4']);
      }, 2000);
    } else {
      this.respuestaCorrectaZ2 = false;
      this.respuestaIncorrectaZ2 = true;
      this.respuestasCorrectasZ2['/zona2/pregunta4'] = false;
  
      // Almacenar estado específico de la pregunta 1
      localStorage.setItem('respuestaCorrectaZ2Pregunta4', 'false');
  
      if (this.seleccionZ2 === 'Merlín') {
        setTimeout(() => {
          this.router.navigate(['/zona2/pregunta4/pista1']);
        }, 2000);
      } else {
        setTimeout(() => {
          this.router.navigate(['/zona2/pregunta4/pista2']);
        }, 2000);
      }
    }
  
    localStorage.setItem('respuestasCorrectasZ2', JSON.stringify(this.respuestasCorrectasZ2));
    localStorage.setItem('seleccionZ2Pregunta4', this.seleccionZ2);
  }
  

  goToZona2() {
    this.router.navigate(['/zona2']);
  }

  goToExplicacion() {
    this.router.navigate(['/zona2/pregunta4/explicacion4']);
  }
  
  ngOnInit() {
    const respuestasGuardadasZ2 = localStorage.getItem('respuestasCorrectasZ2');
    if (respuestasGuardadasZ2) {
      this.respuestasCorrectasZ2 = JSON.parse(respuestasGuardadasZ2);
    }
  
    const seleccionZ2GuardadaZ2 = localStorage.getItem('seleccionZ2Pregunta4');
    if (seleccionZ2GuardadaZ2) {
      this.seleccionZ2 = seleccionZ2GuardadaZ2;
    }
  
    // Recuperar el estado específico de la pregunta 1
    const respuestaCorrectaZ2Pregunta4 = localStorage.getItem('respuestaCorrectaZ2Pregunta4');
    this.respuestaCorrectaZ2 = respuestaCorrectaZ2Pregunta4 === 'true';
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


