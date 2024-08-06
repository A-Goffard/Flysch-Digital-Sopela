import { Routes } from '@angular/router';
import { IntroComponent } from './pages/intro/intro.component';
import { HomeComponent } from './pages/home/home.component';
import { ContextComponent } from './pages/context/context.component';
import { InstructionsComponent } from './pages/instructions/instructions.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ZonasComponent } from './pages/zonas/zonas.component';

// Importa los componentes para las zonas y sus rutas hijas
import { Zona1Component } from './pages/zonas/zona1/zona1.component';
import { Pregunta1Component as Zona1Pregunta1Component } from './pages/zonas/zona1/pregunta1/pregunta1.component';
import { Pregunta2Component as Zona1Pregunta2Component } from './pages/zonas/zona1/pregunta2/pregunta2.component';
import { Pregunta3Component as Zona1Pregunta3Component } from './pages/zonas/zona1/pregunta3/pregunta3.component';
import { Pregunta4Component as Zona1Pregunta4Component } from './pages/zonas/zona1/pregunta4/pregunta4.component';
import { Pregunta5Component as Zona1Pregunta5Component } from './pages/zonas/zona1/pregunta5/pregunta5.component';
import { ActividadComponent as Zona1ActividadComponent } from './pages/zonas/zona1/actividad/actividad.component';
import { Pista1Component as Zona1Pregunta1Pista1Component } from './pages/zonas/zona1/pregunta1/pista1/pista1.component';
import { Pista2Component as Zona1Pregunta1Pista2Component } from './pages/zonas/zona1/pregunta1/pista2/pista2.component';
import { ExitoComponent as Zona1ExitoComponent } from './pages/zonas/zona1/exito/exito.component';

import { Zona2Component } from './pages/zonas/zona2/zona2.component';
import { Pregunta1Component as Zona2Pregunta1Component } from './pages/zonas/zona2/pregunta1/pregunta1.component';
import { Pregunta2Component as Zona2Pregunta2Component } from './pages/zonas/zona2/pregunta2/pregunta2.component';
import { Pregunta3Component as Zona2Pregunta3Component } from './pages/zonas/zona2/pregunta3/pregunta3.component';
import { Pregunta4Component as Zona2Pregunta4Component } from './pages/zonas/zona2/pregunta4/pregunta4.component';
import { Pregunta5Component as Zona2Pregunta5Component } from './pages/zonas/zona2/pregunta5/pregunta5.component';
import { ActividadComponent as Zona2ActividadComponent } from './pages/zonas/zona2/actividad/actividad.component';
import { Pista1Component as Zona2Pregunta2Pista1Component } from './pages/zonas/zona2/pregunta1/pista1/pista1.component';
import { Pista2Component as Zona2Pregunta2Pista2Component } from './pages/zonas/zona2/pregunta1/pista2/pista2.component';
import { ExitoComponent as Zona2ExitoComponent } from './pages/zonas/zona2/exito/exito.component';

import { Zona3Component } from './pages/zonas/zona3/zona3.component';
import { Pregunta1Component as Zona3Pregunta1Component } from './pages/zonas/zona3/pregunta1/pregunta1.component';
import { Pregunta2Component as Zona3Pregunta2Component } from './pages/zonas/zona3/pregunta2/pregunta2.component';
import { Pregunta3Component as Zona3Pregunta3Component } from './pages/zonas/zona3/pregunta3/pregunta3.component';
import { Pregunta4Component as Zona3Pregunta4Component } from './pages/zonas/zona3/pregunta4/pregunta4.component';
import { Pregunta5Component as Zona3Pregunta5Component } from './pages/zonas/zona3/pregunta5/pregunta5.component';
import { ActividadComponent as Zona3ActividadComponent } from './pages/zonas/zona3/actividad/actividad.component';
import { Pista1Component as Zona3Pregunta3Pista1Component } from './pages/zonas/zona3/pregunta1/pista1/pista1.component';
import { Pista2Component as Zona3Pregunta3Pista2Component } from './pages/zonas/zona3/pregunta1/pista2/pista2.component';
import { ExitoComponent as Zona3ExitoComponent } from './pages/zonas/zona3/exito/exito.component';

import { Zona4Component } from './pages/zonas/zona4/zona4.component';
import { Pregunta1Component as Zona4Pregunta1Component } from './pages/zonas/zona4/pregunta1/pregunta1.component';
import { Pregunta2Component as Zona4Pregunta2Component } from './pages/zonas/zona4/pregunta2/pregunta2.component';
import { Pregunta3Component as Zona4Pregunta3Component } from './pages/zonas/zona4/pregunta3/pregunta3.component';
import { Pregunta4Component as Zona4Pregunta4Component } from './pages/zonas/zona4/pregunta4/pregunta4.component';
import { Pregunta5Component as Zona4Pregunta5Component } from './pages/zonas/zona4/pregunta5/pregunta5.component';
import { ActividadComponent as Zona4ActividadComponent } from './pages/zonas/zona4/actividad/actividad.component';
import { Pista1Component as Zona4Pregunta4Pista1Component } from './pages/zonas/zona4/pregunta1/pista1/pista1.component';
import { Pista2Component as Zona4Pregunta4Pista2Component } from './pages/zonas/zona4/pregunta1/pista2/pista2.component';
import { ExitoComponent as Zona4ExitoComponent } from './pages/zonas/zona4/exito/exito.component';

import { Zona5Component } from './pages/zonas/zona5/zona5.component';
import { Pregunta1Component as Zona5Pregunta1Component } from './pages/zonas/zona5/pregunta1/pregunta1.component';
import { Pregunta2Component as Zona5Pregunta2Component } from './pages/zonas/zona5/pregunta2/pregunta2.component';
import { Pregunta3Component as Zona5Pregunta3Component } from './pages/zonas/zona5/pregunta3/pregunta3.component';
import { Pregunta4Component as Zona5Pregunta4Component } from './pages/zonas/zona5/pregunta4/pregunta4.component';
import { Pregunta5Component as Zona5Pregunta5Component } from './pages/zonas/zona5/pregunta5/pregunta5.component';
import { ActividadComponent as Zona5ActividadComponent } from './pages/zonas/zona5/actividad/actividad.component';
import { Pista1Component as Zona5Pregunta5Pista1Component } from './pages/zonas/zona5/pregunta1/pista1/pista1.component';
import { Pista2Component as Zona5Pregunta5Pista2Component } from './pages/zonas/zona5/pregunta1/pista2/pista2.component';
import { ExitoComponent as Zona5ExitoComponent } from './pages/zonas/zona5/exito/exito.component';

export const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'home', component: HomeComponent },
  { path: 'context', component: ContextComponent },
  { path: 'instructions', component: InstructionsComponent },
  { path: 'contact', component: ContactoComponent },
  
  { path: 'zonas', component: ZonasComponent },

  {
    path: 'zona1',
    component: Zona1Component,
    children: [
      { 
        path: 'pregunta1', 
        component: Zona1Pregunta1Component,
        children:[
          { path: 'pista1', component: Zona1Pregunta1Pista1Component },
          { path: 'pista2', component: Zona1Pregunta1Pista2Component },
        ],
      },
      { 
        path: 'pregunta2', 
        component: Zona1Pregunta2Component,
        children:[
          { path: 'pista1', component: Zona1Pregunta1Pista1Component },
          { path: 'pista2', component: Zona1Pregunta1Pista2Component },
        ],
      },
      { 
        path: 'pregunta3', 
        component: Zona1Pregunta3Component,
        children:[
          { path: 'pista1', component: Zona1Pregunta1Pista1Component },
          { path: 'pista2', component: Zona1Pregunta1Pista2Component },
        ],
      },
      { 
        path: 'pregunta4', 
        component: Zona1Pregunta4Component,
        children:[
          { path: 'pista1', component: Zona1Pregunta1Pista1Component },
          { path: 'pista2', component: Zona1Pregunta1Pista2Component },
        ],
      },
      { 
        path: 'pregunta5', 
        component: Zona1Pregunta5Component,
        children:[
          { path: 'pista1', component: Zona1Pregunta1Pista1Component },
          { path: 'pista2', component: Zona1Pregunta1Pista2Component },
        ],
      },
      { path: 'actividad', component: Zona1ActividadComponent },
      { path: 'exito', component: Zona1ExitoComponent },
    ]
  },
  {
    path: 'zona2',
    component: Zona2Component,
    children: [
      { 
        path: 'pregunta1', 
        component: Zona2Pregunta1Component,
        children:[
          { path: 'pista1', component: Zona2Pregunta2Pista1Component },
          { path: 'pista2', component: Zona2Pregunta2Pista2Component },
        ],
      },
      { 
        path: 'pregunta2', 
        component: Zona2Pregunta2Component,
        children:[
          { path: 'pista1', component: Zona2Pregunta2Pista1Component },
          { path: 'pista2', component: Zona2Pregunta2Pista2Component },
        ],
      },
      { 
        path: 'pregunta3', 
        component: Zona2Pregunta3Component,
        children:[
          { path: 'pista1', component: Zona2Pregunta2Pista1Component },
          { path: 'pista2', component: Zona2Pregunta2Pista2Component },
        ],
      },
      { 
        path: 'pregunta4', 
        component: Zona2Pregunta4Component,
        children:[
          { path: 'pista1', component: Zona2Pregunta2Pista1Component },
          { path: 'pista2', component: Zona2Pregunta2Pista2Component },
        ],
      },
      { 
        path: 'pregunta5', 
        component: Zona2Pregunta5Component,
        children:[
          { path: 'pista1', component: Zona2Pregunta2Pista1Component },
          { path: 'pista2', component: Zona2Pregunta2Pista2Component },
        ],
      },
      { path: 'actividad', component: Zona2ActividadComponent },
      { path: 'exito', component: Zona2ExitoComponent },
    ]
  },
  {
    path: 'zona3',
    component: Zona3Component,
    children: [
      { 
        path: 'pregunta1', 
        component: Zona3Pregunta1Component,
        children:[
          { path: 'pista1', component: Zona3Pregunta3Pista1Component },
          { path: 'pista2', component: Zona3Pregunta3Pista2Component },
        ],
      },
      { 
        path: 'pregunta2', 
        component: Zona3Pregunta2Component,
        children:[
          { path: 'pista1', component: Zona3Pregunta3Pista1Component },
          { path: 'pista2', component: Zona3Pregunta3Pista2Component },
        ],
      },
      { 
        path: 'pregunta3', 
        component: Zona3Pregunta3Component,
        children:[
          { path: 'pista1', component: Zona3Pregunta3Pista1Component },
          { path: 'pista2', component: Zona3Pregunta3Pista2Component },
        ],
      },
      { 
        path: 'pregunta4', 
        component: Zona3Pregunta4Component,
        children:[
          { path: 'pista1', component: Zona3Pregunta3Pista1Component },
          { path: 'pista2', component: Zona3Pregunta3Pista2Component },
        ],
      },
      { 
        path: 'pregunta5', 
        component: Zona3Pregunta5Component,
        children:[
          { path: 'pista1', component: Zona3Pregunta3Pista1Component },
          { path: 'pista2', component: Zona3Pregunta3Pista2Component },
        ],
      },
      { path: 'actividad', component: Zona3ActividadComponent },
      { path: 'exito', component: Zona3ExitoComponent },
    ]
  },
  {
    path: 'zona4',
    component: Zona4Component,
    children: [
      { 
        path: 'pregunta1', 
        component: Zona4Pregunta1Component,
        children:[
          { path: 'pista1', component: Zona4Pregunta4Pista1Component },
          { path: 'pista2', component: Zona4Pregunta4Pista2Component },
        ],
      },
      { 
        path: 'pregunta2', 
        component: Zona4Pregunta2Component,
        children:[
          { path: 'pista1', component: Zona4Pregunta4Pista1Component },
          { path: 'pista2', component: Zona4Pregunta4Pista2Component },
        ],
      },
      { 
        path: 'pregunta3', 
        component: Zona4Pregunta3Component,
        children:[
          { path: 'pista1', component: Zona4Pregunta4Pista1Component },
          { path: 'pista2', component: Zona4Pregunta4Pista2Component },
        ],
      },
      { 
        path: 'pregunta4', 
        component: Zona4Pregunta4Component,
        children:[
          { path: 'pista1', component: Zona4Pregunta4Pista1Component },
          { path: 'pista2', component: Zona4Pregunta4Pista2Component },
        ],
      },
      { 
        path: 'pregunta5', 
        component: Zona4Pregunta5Component,
        children:[
          { path: 'pista1', component: Zona4Pregunta4Pista1Component },
          { path: 'pista2', component: Zona4Pregunta4Pista2Component },
        ],
      },
      { path: 'actividad', component: Zona4ActividadComponent },
      { path: 'exito', component: Zona4ExitoComponent },
    ]
  },
  {
    path: 'zona5',
    component: Zona5Component,
    children: [
      { 
        path: 'pregunta1', 
        component: Zona5Pregunta1Component,
        children:[
          { path: 'pista1', component: Zona5Pregunta5Pista1Component },
          { path: 'pista2', component: Zona5Pregunta5Pista2Component },
        ],
      },
      { 
        path: 'pregunta2', 
        component: Zona5Pregunta2Component,
        children:[
          { path: 'pista1', component: Zona5Pregunta5Pista1Component },
          { path: 'pista2', component: Zona5Pregunta5Pista2Component },
        ],
      },
      { 
        path: 'pregunta3', 
        component: Zona5Pregunta3Component,
        children:[
          { path: 'pista1', component: Zona5Pregunta5Pista1Component },
          { path: 'pista2', component: Zona5Pregunta5Pista2Component },
        ],
      },
      { 
        path: 'pregunta4', 
        component: Zona5Pregunta4Component,
        children:[
          { path: 'pista1', component: Zona5Pregunta5Pista1Component },
          { path: 'pista2', component: Zona5Pregunta5Pista2Component },
        ],
      },
      { 
        path: 'pregunta5', 
        component: Zona5Pregunta5Component,
        children:[
          { path: 'pista1', component: Zona5Pregunta5Pista1Component },
          { path: 'pista2', component: Zona5Pregunta5Pista2Component },
        ],
      },
      { path: 'actividad', component: Zona5ActividadComponent },
      { path: 'exito', component: Zona5ExitoComponent },
    ]
  },
];
