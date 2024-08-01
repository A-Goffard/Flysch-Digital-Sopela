import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Pregunta1Component } from './pregunta1/pregunta1.component';
import { Pregunta2Component } from './pregunta2/pregunta2.component';
import { Pregunta3Component } from './pregunta3/pregunta3.component';
import { Pregunta4Component } from './pregunta4/pregunta4.component';
import { Pregunta5Component } from './pregunta5/pregunta5.component';
import { ActividadComponent } from './actividad/actividad.component';
import { Pista1Component } from './pregunta1/pista1/pista1.component';
import { NavZona1Component } from "./nav-zona1/nav-zona1.component";
import { Pista2Component } from './pista2/pista2.component';
import { ExitoComponent } from './exito/exito.component';

@Component({
  selector: 'app-zona1',
  standalone: true,
  imports: [CommonModule, RouterModule, NavZona1Component],
  templateUrl: './zona1.component.html',
  styleUrls: ['./zona1.component.css']
})
export class Zona1Component {}

export const routes: Routes = [

  { path: 'zona1', component: Zona1Component, children: [
    { path: 'pregunta1', component: Pregunta1Component },
    { path: 'pregunta2', component: Pregunta2Component },
    { path: 'pregunta3', component: Pregunta3Component },
    { path: 'pregunta4', component: Pregunta4Component },
    { path: 'pregunta5', component: Pregunta5Component },
    { path: 'actividad', component: ActividadComponent },
    { path: 'pista1', component: Pista1Component },
    { path: 'pista2', component: Pista2Component },
    { path: 'exito', component: ExitoComponent }
  ]},

];