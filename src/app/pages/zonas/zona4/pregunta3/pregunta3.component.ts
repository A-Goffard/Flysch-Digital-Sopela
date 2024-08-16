import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BackComponentComponent } from "../../../../shared/back-component/back-component.component";


@Component({
  selector: 'app-zona4-pregunta3',
  standalone: true,
  imports: [CommonModule, RouterModule, BackComponentComponent],
  templateUrl: './pregunta3.component.html',
  styleUrl: './pregunta3.component.css'
})
export class Pregunta3Component implements OnInit {
  mostrarLupa = false;
  respuestaCorrectaZ4 = false;
  respuestaIncorrectaZ4 = false;
  respuestasCorrectasZ4: { [key: string]: boolean } = {};
  seleccionZ4: string = '';
  comprobarPressedZ4 = false;

  constructor(private router: Router) {}
  comprobar() {
    this.comprobarPressedZ4 = true;
  
    if (this.seleccionZ4 === 'XXXrespuestacorrecta') {
      this.respuestaCorrectaZ4 = true;
      this.respuestaIncorrectaZ4 = false;
      this.respuestasCorrectasZ4['/zona4/pregunta3'] = true;
  
      // Almacenar estado específico de la pregunta 1
      localStorage.setItem('respuestaCorrectaZ4Pregunta3', 'true');
  
      setTimeout(() => {
        this.router.navigate(['/zona4/pregunta3/explicacion3']);
      }, 2000);
    } else {
      this.respuestaCorrectaZ4 = false;
      this.respuestaIncorrectaZ4 = true;
      this.respuestasCorrectasZ4['/zona4/pregunta3'] = false;
  
      // Almacenar estado específico de la pregunta 1
      localStorage.setItem('respuestaCorrectaZ4Pregunta3', 'false');
  
      if (this.seleccionZ4 === 'xxxrespuestaerronea') {
        setTimeout(() => {
          this.router.navigate(['/zona4/pregunta3/pista1']);
        }, 2000);
      } else {
        setTimeout(() => {
          this.router.navigate(['/zona4/pregunta3/pista2']);
        }, 2000);
      }
    }
  
    localStorage.setItem('respuestasCorrectasZ4', JSON.stringify(this.respuestasCorrectasZ4));
    localStorage.setItem('seleccionZ4Pregunta3', this.seleccionZ4);
  }
  

  goToZona4() {
    this.router.navigate(['/zona4']);
  }
  
  ngOnInit() {
    const respuestasGuardadasZ4 = localStorage.getItem('respuestasCorrectasZ4');
    if (respuestasGuardadasZ4) {
      this.respuestasCorrectasZ4 = JSON.parse(respuestasGuardadasZ4);
    }
  
    const seleccionZ4GuardadaZ4 = localStorage.getItem('seleccionZ4Pregunta3');
    if (seleccionZ4GuardadaZ4) {
      this.seleccionZ4 = seleccionZ4GuardadaZ4;
    }
  
    // Recuperar el estado específico de la pregunta 1
    const respuestaCorrectaZ4Pregunta3 = localStorage.getItem('respuestaCorrectaZ4Pregunta3');
    this.respuestaCorrectaZ4 = respuestaCorrectaZ4Pregunta3 === 'true';
    this.respuestaIncorrectaZ4 = !this.respuestaCorrectaZ4 && !!this.seleccionZ4;
  }
  

  onOptionChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.seleccionZ4 = inputElement.value;
      this.comprobarPressedZ4 = false;
    }
  }
}