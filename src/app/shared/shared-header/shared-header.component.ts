import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router para navegar a "zonas"
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'shared-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './shared-header.component.html',
  styleUrls: ['./shared-header.component.css']
})
export class NavZonasComponent {
  
  constructor(private router: Router) {} 

  confirmReset(event: Event) {
    event.preventDefault(); // Previene el comportamiento predeterminado del enlace

    const userConfirmed = confirm("¿Estás seguro de que quieres borrar tu progreso y reiniciar el juego?");
    if (userConfirmed) {
      this.resetGame(); 
    }
  }

  resetGame() {
    localStorage.clear(); // Borra el progreso guardado en localStorage
    this.router.navigate(['/zonas']); // Navega a la página de "zonas"
  }
}
