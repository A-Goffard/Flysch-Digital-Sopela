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
  respuestaCorrectaZ5 = false;
  respuestaIncorrectaZ5 = false;
  respuestasCorrectasZ5: { [key: string]: boolean } = {};
  seleccionZ5: string = '';
  comprobarPressedZ5 = false;

  constructor(private router: Router) {}
  comprobar() {
    this.comprobarPressedZ5 = true;
  
    if (this.seleccionZ5 === 'Calizas, margas y areniscas') {
      this.respuestaCorrectaZ5 = true;
      this.respuestaIncorrectaZ5 = false;
      this.respuestasCorrectasZ5['/zona5/pregunta2'] = true;
  
      // Almacenar estado específico de la pregunta 1
      localStorage.setItem('respuestaCorrectaZ5Pregunta2', 'true');
  
      setTimeout(() => {
        this.router.navigate(['/zona5/pregunta2/explicacion2']);
      }, 2000);
    } else {
      this.respuestaCorrectaZ5 = false;
      this.respuestaIncorrectaZ5 = true;
      this.respuestasCorrectasZ5['/zona5/pregunta2'] = false;
  
      // Almacenar estado específico de la pregunta 1
      localStorage.setItem('respuestaCorrectaZ5Pregunta2', 'false');
  
      if (this.seleccionZ5 === 'Calizas y margas') {
        setTimeout(() => {
          this.router.navigate(['/zona5/pregunta2/pista1']);
        }, 2000);
      } else {
        setTimeout(() => {
          this.router.navigate(['/zona5/pregunta2/pista2']);
        }, 2000);
      }
    }
  
    localStorage.setItem('respuestasCorrectasZ5', JSON.stringify(this.respuestasCorrectasZ5));
    localStorage.setItem('seleccionZ5Pregunta2', this.seleccionZ5);
  }
  

  goToZona5() {
    this.router.navigate(['/zona5']);
  }
  
  goToExplicacion() {
    this.router.navigate(['/zona5/pregunta2/explicacion2']);
  }

  ngOnInit() {
    const respuestasGuardadasZ5 = localStorage.getItem('respuestasCorrectasZ5');
    if (respuestasGuardadasZ5) {
      this.respuestasCorrectasZ5 = JSON.parse(respuestasGuardadasZ5);
    }
  
    const seleccionZ5GuardadaZ5 = localStorage.getItem('seleccionZ5Pregunta2');
    if (seleccionZ5GuardadaZ5) {
      this.seleccionZ5 = seleccionZ5GuardadaZ5;
    }
  
    // Recuperar el estado específico de la pregunta 1
    const respuestaCorrectaZ5Pregunta2 = localStorage.getItem('respuestaCorrectaZ5Pregunta2');
    this.respuestaCorrectaZ5 = respuestaCorrectaZ5Pregunta2 === 'true';
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