import { Routes } from '@angular/router';
import { IntroComponent } from './pages/intro/intro.component';

import { HomeComponent } from './pages/home/home.component';
import { ContextComponent } from './pages/context/context.component';
import { InstructionsComponent } from './pages/instructions/instructions.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

import { Zona1Component } from './pages/zona1/zona1.component';
import { Pregunta1Component } from './pages/zona1/pregunta1/pregunta1.component';
import { Pregunta2Component } from './pages/zona1/pregunta2/pregunta2.component';
import { Pregunta3Component } from './pages/zona1/pregunta3/pregunta3.component';
import { Pregunta4Component } from './pages/zona1/pregunta4/pregunta4.component';
import { Pregunta5Component } from './pages/zona1/pregunta5/pregunta5.component';
import { ActividadComponent } from './pages/zona1/actividad/actividad.component';
import { Pista1Component } from './pages/zona1/pregunta1/pista1/pista1.component';

import { Zona2Component } from './pages/zona2/zona2.component';

import { Zona3Component } from './pages/zona3/zona3.component';
import { Zona4Component } from './pages/zona4/zona4.component';
import { Zona5Component } from './pages/zona5/zona5.component';




export const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'home', component: HomeComponent },
  { path: 'context', component: ContextComponent },

  { path: 'instructions', component: InstructionsComponent },

  { path: 'zona1', component: Zona1Component, children: [
    { path: 'pregunta1', component: Pregunta1Component },
    { path: 'pregunta2', component: Pregunta2Component },
    { path: 'pregunta3', component: Pregunta3Component },
    { path: 'pregunta4', component: Pregunta4Component },
    { path: 'pregunta5', component: Pregunta5Component },
    { path: 'actividad', component: ActividadComponent },
    { path: 'pista1', component: Pista1Component }
  ]},

  { path: 'zona2', component: Zona2Component },
  { path: 'zona3', component: Zona3Component },
  { path: 'zona4', component: Zona4Component },
  { path: 'zona5', component: Zona5Component },

  { path: 'contact', component: ContactoComponent },
  
  { path: '**', redirectTo: 'home' } // Maneja rutas no encontradas
];
