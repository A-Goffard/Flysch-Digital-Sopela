import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { NavHeaderComponent } from "./shared/nav-header/nav-header.component";
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { NavZonasComponent } from "./shared/shared-header/shared-header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavHeaderComponent, CommonModule, NavZonasComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Flysch-Digital';

  constructor(private router: Router) {}

  ngOnInit() {
    // Desplazarse a la parte superior al cambiar de ruta
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo(0, 0); // Desplazarse a la parte superior
    });
  }
}
