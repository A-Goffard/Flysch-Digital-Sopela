import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BackComponentComponent } from "../../../../shared/back-component/back-component.component";


@Component({
  selector: 'app-zona4-pregunta5',
  standalone: true,
  imports: [CommonModule, RouterModule, BackComponentComponent],
  templateUrl: './pregunta5.component.html',
  styleUrl: './pregunta5.component.css'
})
export class Pregunta5Component implements OnInit {
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
      this.respuestasCorrectasZ4['/zona4/pregunta5'] = true;
  
      // Almacenar estado específico de la pregunta 1
      localStorage.setItem('respuestaCorrectaZ4Pregunta5', 'true');
  
      setTimeout(() => {
        this.router.navigate(['/zonas4pregunta5/explicacion5']);
      }, 2000);
    } else {
      this.respuestaCorrectaZ4 = false;
      this.respuestaIncorrectaZ4 = true;
      this.respuestasCorrectasZ4['/zona4/pregunta5'] = false;
  
      // Almacenar estado específico de la pregunta 1
      localStorage.setItem('respuestaCorrectaZ4Pregunta5', 'false');
  
      if (this.seleccionZ4 === 'xxxrespuestaerronea') {
        setTimeout(() => {
          this.router.navigate(['/zona4/pregunta5/pista1']);
        }, 2000);
      } else {
        setTimeout(() => {
          this.router.navigate(['/zona4/pregunta5/pista2']);
        }, 2000);
      }
    }
  
    localStorage.setItem('respuestasCorrectasZ4', JSON.stringify(this.respuestasCorrectasZ4));
    localStorage.setItem('seleccionZ4Pregunta5', this.seleccionZ4);
  }
  

  goToZona4() {
    this.router.navigate(['/zona4']);
  }

  goToExplicacion() {
    this.router.navigate(['/zona4/pregunta5/explicacion5']);
  }
  
  ngOnInit() {
    const respuestasGuardadasZ4 = localStorage.getItem('respuestasCorrectasZ4');
    if (respuestasGuardadasZ4) {
      this.respuestasCorrectasZ4 = JSON.parse(respuestasGuardadasZ4);
    }
  
    const seleccionZ4GuardadaZ4 = localStorage.getItem('seleccionZ4Pregunta5');
    if (seleccionZ4GuardadaZ4) {
      this.seleccionZ4 = seleccionZ4GuardadaZ4;
    }
  
    // Recuperar el estado específico de la pregunta 1
    const respuestaCorrectaZ4Pregunta5 = localStorage.getItem('respuestaCorrectaZ4Pregunta5');
    this.respuestaCorrectaZ4 = respuestaCorrectaZ4Pregunta5 === 'true';
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