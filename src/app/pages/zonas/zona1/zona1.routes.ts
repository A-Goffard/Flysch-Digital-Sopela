import { Routes } from '@angular/router';
import { Zona1Component } from './zona1.component';
import { Pregunta1Component } from './pregunta1/pregunta1.component';
import { Pregunta2Component } from './pregunta2/pregunta2.component';
import { Pregunta3Component } from './pregunta3/pregunta3.component';
import { Pregunta4Component } from './pregunta4/pregunta4.component';
import { Pregunta5Component } from './pregunta5/pregunta5.component';
import { Pista1Component as Zona1Pregunta1Pista1Component } from './pregunta1/pista1/pista1.component';
import { Pista2Component as Zona1Pregunta1Pista2Component } from './pregunta1/pista2/pista2.component';
import { Pista1Component as Zona1Pregunta2Pista1Component } from './pregunta2/pista1/pista1.component';
import { Pista2Component as Zona1Pregunta2Pista2Component } from './pregunta1/pista2/pista2.component';
import { Pista1Component as Zona1Pregunta3Pista1Component } from './pregunta1/pista1/pista1.component';
import { Pista2Component as Zona1Pregunta3Pista2Component } from './pregunta1/pista2/pista2.component';
import { Pista1Component as Zona1Pregunta4Pista1Component } from './pregunta1/pista1/pista1.component';
import { Pista2Component as Zona1Pregunta4Pista2Component } from './pregunta1/pista2/pista2.component';
import { Pista1Component as Zona1Pregunta5Pista1Component } from './pregunta1/pista1/pista1.component';
import { Pista2Component as Zona1Pregunta5Pista2Component } from './pregunta1/pista2/pista2.component';


export const ZONA1_ROUTES: Routes = [
  {
    path: 'zona1',
    component: Zona1Component,
    children: [
      { path: 'pregunta1', component: Pregunta1Component },
      { path: 'pregunta1/pista1', component: Zona1Pregunta1Pista1Component },
      { path: 'pregunta1/pista2', component: Zona1Pregunta1Pista2Component },
      { path: 'pregunta2', component: Pregunta2Component },
      { path: 'pregunta2/pista1', component: Zona1Pregunta2Pista1Component },
      { path: 'pregunta2/pista2', component: Zona1Pregunta2Pista2Component },
      { path: 'pregunta3', component: Pregunta3Component },
      { path: 'pregunta3/pista1', component: Zona1Pregunta3Pista1Component },
      { path: 'pregunta3/pista2', component: Zona1Pregunta3Pista2Component },
      { path: 'pregunta4', component: Pregunta4Component },
      { path: 'pregunta4/pista1', component: Zona1Pregunta4Pista1Component },
      { path: 'pregunta4/pista2', component: Zona1Pregunta4Pista2Component },
      { path: 'pregunta5', component: Pregunta5Component },
      { path: 'pregunta5/pista1', component: Zona1Pregunta5Pista1Component },
      { path: 'pregunta5/pista2', component: Zona1Pregunta5Pista2Component },
      // Agrega aquí todas las rutas de las preguntas y pistas adicionales
      { path: '', redirectTo: 'pregunta1', pathMatch: 'full' }
    ]
  }
];
