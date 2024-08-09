import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavZonasComponent } from '../../../shared/nav-zonas/nav-zonas.component';
import { MarcadoresComponent } from './componentes/marcadores/marcadores.component';
@Component({
  selector: 'app-zona2',
  standalone: true,
  imports: [CommonModule, RouterModule, NavZonasComponent, MarcadoresComponent],
  templateUrl: './zona2.component.html',
  styleUrl: './zona2.component.css'
})
export class Zona2Component {

}
