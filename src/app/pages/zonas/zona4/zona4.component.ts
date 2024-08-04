import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavZonasComponent } from '../../../shared/nav-zonas/nav-zonas.component';

@Component({
  selector: 'app-zona4',
  standalone: true,
  imports: [CommonModule, RouterModule, NavZonasComponent],
  templateUrl: './zona4.component.html',
  styleUrl: './zona4.component.css'
})
export class Zona4Component {

}
