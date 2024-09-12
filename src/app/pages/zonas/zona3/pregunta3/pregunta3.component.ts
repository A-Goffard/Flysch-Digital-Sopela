import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BackComponentComponent } from "../../../../shared/back-component/back-component.component";


@Component({
  selector: 'app-zona3-pregunta3',
  standalone: true,
  imports: [CommonModule, RouterModule, BackComponentComponent],
  templateUrl: './pregunta3.component.html',
  styleUrl: './pregunta3.component.css'
})
export class Pregunta3Component implements OnInit {
  mostrarLupa = false;
  respuestaCorrectaZ3 = false;
  respuestaIncorrectaZ3 = false;
  respuestasCorrectasZ3: { [key: string]: boolean } = {};
  seleccionZ3: string = '';
  comprobarPressedZ3 = false;

  constructor(private router: Router) {}
  comprobar() {
    this.comprobarPressedZ3 = true;
  
    if (this.seleccionZ3 === 'Mosasaurus') {
      this.respuestaCorrectaZ3 = true;
      this.respuestaIncorrectaZ3 = false;
      this.respuestasCorrectasZ3['/zona3/pregunta3'] = true;
  
      // Almacenar estado específico de la pregunta 1
      localStorage.setItem('respuestaCorrectaZ3Pregunta3', 'true');
  
      setTimeout(() => {
        this.router.navigate(['/zona3/pregunta3/explicacion3']);
      }, 2000);
    } else {
      this.respuestaCorrectaZ3 = false;
      this.respuestaIncorrectaZ3 = true;
      this.respuestasCorrectasZ3['/zona3/pregunta3'] = false;
  
      // Almacenar estado específico de la pregunta 1
      localStorage.setItem('respuestaCorrectaZ3Pregunta3', 'false');
  
      if (this.seleccionZ3 === 'Trilobita') {
        setTimeout(() => {
          this.router.navigate(['/zona3/pregunta3/pista1']);
        }, 2000);
      } else {
        setTimeout(() => {
          this.router.navigate(['/zona3/pregunta3/pista2']);
        }, 2000);
      }
    }
  
    localStorage.setItem('respuestasCorrectasZ3', JSON.stringify(this.respuestasCorrectasZ3));
    localStorage.setItem('seleccionZ3Pregunta3', this.seleccionZ3);
  }
  

  goToZona3() {
    this.router.navigate(['/zona3']);
  }
  
  goToExplicacion() {
    this.router.navigate(['/zona3/pregunta3/explicacion3']);
  }

  ngOnInit() {
    const respuestasGuardadasZ3 = localStorage.getItem('respuestasCorrectasZ3');
    if (respuestasGuardadasZ3) {
      this.respuestasCorrectasZ3 = JSON.parse(respuestasGuardadasZ3);
    }
  
    const seleccionZ3GuardadaZ3 = localStorage.getItem('seleccionZ3Pregunta3');
    if (seleccionZ3GuardadaZ3) {
      this.seleccionZ3 = seleccionZ3GuardadaZ3;
    }
  
    // Recuperar el estado específico de la pregunta 1
    const respuestaCorrectaZ3Pregunta3 = localStorage.getItem('respuestaCorrectaZ3Pregunta3');
    this.respuestaCorrectaZ3 = respuestaCorrectaZ3Pregunta3 === 'true';
    this.respuestaIncorrectaZ3 = !this.respuestaCorrectaZ3 && !!this.seleccionZ3;
  }
  

  onOptionChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.seleccionZ3 = inputElement.value;
      this.comprobarPressedZ3 = false;
    }
  }
}