import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'Flysch-Digital';

  constructor(private router: Router) {}

  ngOnInit() {

      // Esperar a que las animaciones terminen antes de redirigir
      setTimeout(() => {
        this.router.navigate(['/home']); // Ajusta la ruta según sea necesario
      }, 12000); // Ajusta el tiempo según la duración de la animación fadeOut

  }
}
