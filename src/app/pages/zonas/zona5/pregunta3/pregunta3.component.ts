import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-zona5-pregunta3',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pregunta3.component.html',
  styleUrl: './pregunta3.component.css'
})
export class Pregunta3Component implements OnInit {
  mostrarLupa = false;
  respuestaCorrectaZ5 = false;
  respuestaIncorrectaZ5 = false;
  respuestasCorrectasZ5: { [key: string]: boolean } = {};
  seleccionZ5: string = '';
  comprobarPressedZ5 = false;

  constructor(private router: Router) {}
  comprobar() {
    this.comprobarPressedZ5 = true;
  
    if (this.seleccionZ5 === 'XXXrespuestacorrecta') {
      this.respuestaCorrectaZ5 = true;
      this.respuestaIncorrectaZ5 = false;
      this.respuestasCorrectasZ5['/zona5/pregunta3'] = true;
  
      // Almacenar estado específico de la pregunta 1
      localStorage.setItem('respuestaCorrectaZ5Pregunta3', 'true');
  
      setTimeout(() => {
        this.router.navigate(['/zona5/pregunta4']);
      }, 2000);
    } else {
      this.respuestaCorrectaZ5 = false;
      this.respuestaIncorrectaZ5 = true;
      this.respuestasCorrectasZ5['/zona5/pregunta3'] = false;
  
      // Almacenar estado específico de la pregunta 1
      localStorage.setItem('respuestaCorrectaZ5Pregunta3', 'false');
  
      if (this.seleccionZ5 === 'xxxrespuestaerronea') {
        setTimeout(() => {
          this.router.navigate(['/zona5/pregunta3/pista1']);
        }, 2000);
      } else {
        setTimeout(() => {
          this.router.navigate(['/zona5/pregunta3/pista2']);
        }, 2000);
      }
    }
  
    localStorage.setItem('respuestasCorrectasZ5', JSON.stringify(this.respuestasCorrectasZ5));
    localStorage.setItem('seleccionZ5Pregunta3', this.seleccionZ5);
  }
  

  goToZona5() {
    this.router.navigate(['/zona5']);
  }
  
  ngOnInit() {
    const respuestasGuardadasZ5 = localStorage.getItem('respuestasCorrectasZ5');
    if (respuestasGuardadasZ5) {
      this.respuestasCorrectasZ5 = JSON.parse(respuestasGuardadasZ5);
    }
  
    const seleccionZ5GuardadaZ5 = localStorage.getItem('seleccionZ5Pregunta3');
    if (seleccionZ5GuardadaZ5) {
      this.seleccionZ5 = seleccionZ5GuardadaZ5;
    }
  
    // Recuperar el estado específico de la pregunta 1
    const respuestaCorrectaZ5Pregunta3 = localStorage.getItem('respuestaCorrectaZ5Pregunta3');
    this.respuestaCorrectaZ5 = respuestaCorrectaZ5Pregunta3 === 'true';
    this.respuestaIncorrectaZ5 = !this.respuestaCorrectaZ5 && !!this.seleccionZ5;
  }
  

  onOptionChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.seleccionZ5 = inputElement.value;
      this.comprobarPressedZ5 = false;
    }
  }
}