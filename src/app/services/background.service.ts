import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {

  private images: string[] = [
    'images/fondos/1.png',
    'images/fondos/2.png',
    'images/fondos/3.png',
    'images/fondos/4.png',
    'images/fondos/5.png',
    'images/fondos/6.png',
    'images/fondos/7.png',
    'images/fondos/8.png',
    'images/fondos/9.png',
    'images/fondos/10.png',
    'images/fondos/11.png',
    'images/fondos/12.png',
    'images/fondos/13.png',
    'images/fondos/14.png',
    'images/fondos/15.png',
    'images/fondos/16.png',
    'images/fondos/17.png',
    'images/fondos/18.png',
    'images/fondos/19.png',
    'images/fondos/20.png',
    'images/fondos/21.png',
    'images/fondos/22.png',
    'images/fondos/23.png',
    'images/fondos/26.png',
    'images/fondos/27.png',
    'images/fondos/28.png',
    'images/fondos/29.png',
    'images/fondos/31.png',
    'images/fondos/32.png',
    'images/fondos/33.png',
    'images/fondos/34.png',
    'images/fondos/35.png',
    'images/fondos/36.png',
    'images/fondos/37.png',
    'images/fondos/38.png',
    'images/fondos/39.png',
    'images/fondos/40.png',
    'images/fondos/41.png',
    'images/fondos/42.png',
    'images/fondos/43.png',
    'images/fondos/44.png',
    'images/fondos/46.png',
    'images/fondos/47.png',
    'images/fondos/48.png',
    'images/fondos/49.png',
    'images/fondos/51.png',
    'images/fondos/52.png',
    'images/fondos/53.png',
    'images/fondos/54.png',
    'images/fondos/55.png',
    'images/fondos/56.png',
    'images/fondos/57.png',
    'images/fondos/58.png',
    'images/fondos/60.png'
  ];
  

  constructor() { }

  getRandomImage(): string {
    const randomIndex = Math.floor(Math.random() * this.images.length);
    return this.images[randomIndex];
  }
}
