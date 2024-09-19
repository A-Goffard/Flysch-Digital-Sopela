import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-portal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnDestroy {
  correctOrder = ['Geubas', 'Erubion', 'Ornimat', 'Besinia', 'Iridimas', 'Zobarat', 'Iletum'];
  currentOrder: string[] = [];
  puzzleComplete = false;
  
  // Definir los audios
  portalSound = new Audio('sounds/portal.mp3'); // Cambia 'public' por 'assets'
  successSound = new Audio('sounds/cerrar.mp3'); 
  IntroSound = new Audio('sounds/entrar.mp3');

  buttons = [
    { name: 'Geubas', image: 'images/simbolos/Geubas.png', disabled: false, selected: false },
    { name: 'Erubion', image: 'images/simbolos/Erubion.png', disabled: false, selected: false },
    { name: 'Ornimat', image: 'images/simbolos/Ornimat.png', disabled: false, selected: false },
    { name: 'Besinia', image: 'images/simbolos/Besinia.png', disabled: false, selected: false },
    { name: 'Iridimas', image: 'images/simbolos/Iridimas.png', disabled: false, selected: false },
    { name: 'Zobarat', image: 'images/simbolos/Zobarat.png', disabled: false, selected: false },
    { name: 'Iletum', image: 'images/simbolos/Iletum.png', disabled: false, selected: false },
  ];

  shuffledButtons = this.shuffleArray([...this.buttons]); // Barajar los botones al cargar

  constructor(private router: Router) { // Inyecta Router en el constructor
    // Configuración del audio en bucle
    this.portalSound.loop = true;
  }

  ngOnInit() {
    // Comienza a reproducir la música en bucle cuando se carga el componente
    this.playIntroSound();
    this.playPortalSound();
  }

  ngOnDestroy() {
    // Detiene el sonido cuando el componente se destruye
    this.portalSound.pause();
    this.portalSound.currentTime = 0; // Opcional: reiniciar el tiempo del audio
  }

  checkOrder(index: number) {
    const selectedButton = this.shuffledButtons[index];

    if (this.correctOrder[this.currentOrder.length] === selectedButton.name) {
      this.currentOrder.push(selectedButton.name);
      this.shuffledButtons[index].disabled = true;
      this.shuffledButtons[index].selected = true;

      if (this.currentOrder.length === this.correctOrder.length) {
        this.puzzleComplete = true;
        this.playSuccessSound(); // Reproducir sonido de éxito
      }
    } else {
      this.resetButtons();
    }
  }

  resetButtons() {
    this.currentOrder = [];
    this.shuffledButtons.forEach(button => {
      button.disabled = false;
      button.selected = false;
    });

    setTimeout(() => {
      this.shuffledButtons = this.shuffleArray([...this.buttons]);
    }, 500);
  }

  shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  playIntroSound() {
    this.IntroSound.play();
  }

  // Reproduce la música en bucle
  playPortalSound() {
    this.portalSound.play();
  }

  // Detiene la música en bucle y reproduce el sonido de éxito
  playSuccessSound() {
    this.portalSound.pause(); // Detener la música de fondo
    this.portalSound.currentTime = 0; // Reiniciar el tiempo del audio opcionalmente
    this.successSound.play(); // Reproducir sonido de éxito
  }

  gotoQuestion() {
    // Navega a la página de zonas
    this.router.navigate(['/feedback']);
  }
}
