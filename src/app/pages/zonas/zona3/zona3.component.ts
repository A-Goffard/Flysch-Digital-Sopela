import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavZonasComponent } from '../../../shared/nav-zonas/nav-zonas.component';
@Component({
  selector: 'app-zona3',
  standalone: true,
  imports: [CommonModule, RouterModule, NavZonasComponent],
  templateUrl: './zona3.component.html',
  styleUrl: './zona3.component.css'
})
export class Zona3Component {

}
