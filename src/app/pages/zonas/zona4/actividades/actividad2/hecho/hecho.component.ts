import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackComponentComponent } from "../../../../../../shared/back-component/back-component.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule para usar ngModel

@Component({
  selector: 'app-zona4-actividad2-hecho2',
  standalone: true,
  templateUrl: './hecho.component.html',
  styleUrls: ['./hecho.component.css'],
  imports: [CommonModule, FormsModule, BackComponentComponent],
})
export class Zona4Actividad2Hecho2Component {

  clave: string = ''; // Almacena la clave introducida
  error: boolean = false; // Controla si hay un error

  constructor(private router: Router) {}

  ayuda() {
    this.router.navigate(['/zona4/actividades/actividad2/fallo']);
  }

  siguiente() {
    const claveCorrecta = 'Zobarat'; 

    if (this.clave === claveCorrecta) {
      // Si la clave es correcta, marca la actividad como completada
      const respuestasCorrectas = JSON.parse(localStorage.getItem('respuestasCorrectas') || '{}');
      respuestasCorrectas['/zona4/actividades/actividad2'] = true; // Marca esta actividad como completada
      localStorage.setItem('respuestasCorrectas', JSON.stringify(respuestasCorrectas));

      // Navega a la siguiente página
      this.router.navigate(['/zona4']);
    } else {
      // Si la clave es incorrecta, muestra un error
      this.error = true;
    }
  }

  }