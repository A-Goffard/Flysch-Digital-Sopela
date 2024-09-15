import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavZonasComponent } from '../../../shared/shared-header/shared-header.component';
import { MarcadoresComponent } from "./componentes/marcadores/marcadores.component";
import { BackComponentComponent } from "../../../shared/back-component/back-component.component";

@Component({
  selector: 'app-zona1',
  standalone: true,
  imports: [CommonModule, RouterModule, NavZonasComponent, MarcadoresComponent, BackComponentComponent],
  templateUrl: './zona1.component.html',
  styleUrls: ['./zona1.component.css']
})
export class Zona1Component{

}


