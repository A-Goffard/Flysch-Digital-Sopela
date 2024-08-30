import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BackComponentComponent } from "../../../../../../shared/back-component/back-component.component";
import { BackgroundService } from '../../../../../../services/background.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-zona1-actividad1-fallo1',
  standalone: true,
  imports: [BackComponentComponent, CommonModule],
  templateUrl: './fallo.component.html',
  styleUrls: ['./fallo.component.css']
})
export class FalloComponent implements OnInit {
  backgroundImage: string = '';

  constructor(private router: Router, private backgroundService: BackgroundService) {}

  ngOnInit() {
    this.setRandomBackground();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setRandomBackground();
      }
    });
  }

  volverIntentar() {
    this.router.navigate(['/zona1/actividades/actividad1']);
  }

  siguiente() {
    this.router.navigate(['/zona1/actividades/actividad2']);
  }

  setRandomBackground() {
    this.backgroundImage = this.backgroundService.getRandomImage();
  }
}
