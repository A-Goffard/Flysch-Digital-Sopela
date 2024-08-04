import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavZonasComponent } from '../../../shared/nav-zonas/nav-zonas.component';

@Component({
  selector: 'app-zona5',
  standalone: true,
  imports: [CommonModule, RouterModule, NavZonasComponent],
  templateUrl: './zona5.component.html',
  styleUrl: './zona5.component.css'
})
export class Zona5Component {

}
