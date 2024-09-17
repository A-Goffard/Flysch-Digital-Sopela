import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent {
  correctOrder = ['Geubas', 'Erubion', 'Ornimat', 'Besinia', 'Iridimas', 'Zobarat', 'Iletum'];
  currentOrder: string[] = [];
  puzzleComplete = false;

  // Definir los botones con sus nombres, imágenes y un campo 'selected' para indicar si fue pulsado
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

  checkOrder(index: number) {
    const selectedButton = this.shuffledButtons[index];

    if (this.correctOrder[this.currentOrder.length] === selectedButton.name) {
      this.currentOrder.push(selectedButton.name);
      this.shuffledButtons[index].disabled = true;
      this.shuffledButtons[index].selected = true; // Marcar el botón como seleccionado

      if (this.currentOrder.length === this.correctOrder.length) {
        this.puzzleComplete = true;
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

    // Añadimos un pequeño retraso antes de rebarajar y mostrar de nuevo los botones
    setTimeout(() => {
      this.shuffledButtons = this.shuffleArray([...this.buttons]);
    }, 500); // 500 ms de margen
  }

  // Método para barajar los botones
  shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
