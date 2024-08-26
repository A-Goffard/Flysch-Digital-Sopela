import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { NavHeaderComponent } from "./shared/nav-header/nav-header.component";
import { BackComponentComponent } from "./shared/back-component/back-component.component";
import { BackgroundService } from './services/background.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavHeaderComponent, BackComponentComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'Flysch-Digital';
  backgroundImage: string = '';

  constructor(private router: Router, private backgroundService: BackgroundService) {}

  ngOnInit() {
    this.setRandomBackground(); // Establece una imagen al inicio

    // Cambia la imagen de fondo en cada navegación
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setRandomBackground();
      }
    });

    // Esperar a que las animaciones terminen antes de redirigir
    setTimeout(() => {
      this.router.navigate(['/home']); // Ajusta la ruta según sea necesario
    }, 12000); // Ajusta el tiempo según la duración de la animación fadeOut
  }

  setRandomBackground() {
    this.backgroundImage = this.backgroundService.getRandomImage();
  }
}
