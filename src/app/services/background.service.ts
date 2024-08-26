import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {

  private images: string[] = [
    'public/images/fondos/background1.jpg',
    'public/images/fondos/background2.jpg',
    'public/images/fondos/background3.jpg',
    // Agrega aquí todas las imágenes de tu carpeta
  ];

  constructor() { }

  getRandomImage(): string {
    const randomIndex = Math.floor(Math.random() * this.images.length);
    return this.images[randomIndex];
  }
}
