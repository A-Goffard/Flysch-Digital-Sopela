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
import { ExitoComponent as Zona1ExitoComponent } from './pages/zonas/zona1/exito/exito.component';
import { Pista1Component as Zona1Pregunta1Pista1Component } from './pages/zonas/zona1/pregunta1/pista1/pista1.component';
import { Pista2Component as Zona1Pregunta1Pista2Component } from './pages/zonas/zona1/pregunta1/pista2/pista2.component';
import { Pista1Component as Zona1Pregunta2Pista1Component } from './pages/zonas/zona1/pregunta1/pista1/pista1.component';
import { Pista2Component as Zona1Pregunta2Pista2Component } from './pages/zonas/zona1/pregunta1/pista2/pista2.component';
import { Pista1Component as Zona1Pregunta3Pista1Component } from './pages/zonas/zona1/pregunta1/pista1/pista1.component';
import { Pista2Component as Zona1Pregunta3Pista2Component } from './pages/zonas/zona1/pregunta1/pista2/pista2.component';
import { Pista1Component as Zona1Pregunta4Pista1Component } from './pages/zonas/zona1/pregunta1/pista1/pista1.component';
import { Pista2Component as Zona1Pregunta4Pista2Component } from './pages/zonas/zona1/pregunta1/pista2/pista2.component';
import { Pista1Component as Zona1Pregunta5Pista1Component } from './pages/zonas/zona1/pregunta1/pista1/pista1.component';
import { Pista2Component as Zona1Pregunta5Pista2Component } from './pages/zonas/zona1/pregunta1/pista2/pista2.component';

import { Zona2Component } from './pages/zonas/zona2/zona2.component';
import { Pregunta1Component as Zona2Pregunta1Component } from './pages/zonas/zona2/pregunta1/pregunta1.component';
import { Pregunta2Component as Zona2Pregunta2Component } from './pages/zonas/zona2/pregunta2/pregunta2.component';
import { Pregunta3Component as Zona2Pregunta3Component } from './pages/zonas/zona2/pregunta3/pregunta3.component';
import { Pregunta4Component as Zona2Pregunta4Component } from './pages/zonas/zona2/pregunta4/pregunta4.component';
import { Pregunta5Component as Zona2Pregunta5Component } from './pages/zonas/zona2/pregunta5/pregunta5.component';
import { ActividadComponent as Zona2ActividadComponent } from './pages/zonas/zona2/actividad/actividad.component';
import { ExitoComponent as Zona2ExitoComponent } from './pages/zonas/zona2/exito/exito.component';
import { Pista1Component as Zona2Pregunta1Pista1Component } from './pages/zonas/zona1/pregunta1/pista1/pista1.component';
import { Pista2Component as Zona2Pregunta1Pista2Component } from './pages/zonas/zona1/pregunta1/pista2/pista2.component';
import { Pista1Component as Zona2Pregunta2Pista1Component } from './pages/zonas/zona1/pregunta1/pista1/pista1.component';
import { Pista2Component as Zona2Pregunta2Pista2Component } from './pages/zonas/zona1/pregunta1/pista2/pista2.component';
import { Pista1Component as Zona2Pregunta3Pista1Component } from './pages/zonas/zona1/pregunta1/pista1/pista1.component';
import { Pista2Component as Zona2Pregunta3Pista2Component } from './pages/zonas/zona1/pregunta1/pista2/pista2.component';
import { Pista1Component as Zona2Pregunta4Pista1Component } from './pages/zonas/zona1/pregunta1/pista1/pista1.component';
import { Pista2Component as Zona2Pregunta4Pista2Component } from './pages/zonas/zona1/pregunta1/pista2/pista2.component';
import { Pista1Component as Zona2Pregunta5Pista1Component } from './pages/zonas/zona1/pregunta1/pista1/pista1.component';
import { Pista2Component as Zona2Pregunta5Pista2Component } from './pages/zonas/zona1/pregunta1/pista2/pista2.component';


import { Zona3Component } from './pages/zonas/zona3/zona3.component';
import { Pregunta1Component as Zona3Pregunta1Component } from './pages/zonas/zona3/pregunta1/pregunta1.component';
import { Pregunta2Component as Zona3Pregunta2Component } from './pages/zonas/zona3/pregunta2/pregunta2.component';
import { Pregunta3Component as Zona3Pregunta3Component } from './pages/zonas/zona3/pregunta3/pregunta3.component';
import { Pregunta4Component as Zona3Pregunta4Component } from './pages/zonas/zona3/pregunta4/pregunta4.component';
import { Pregunta5Component as Zona3Pregunta5Component } from './pages/zonas/zona3/pregunta5/pregunta5.component';
import { ActividadComponent as Zona3ActividadComponent } from './pages/zonas/zona3/actividad/actividad.component';
import { ExitoComponent as Zona3ExitoComponent } from './pages/zonas/zona3/exito/exito.component';
import { Pista1Component as Zona3Pregunta1Pista1Component } from './pages/zonas/zona1/pregunta1/pista1/pista1.component';
import { Pista2Component as Zona3Pregunta1Pista2Component } from './pages/zonas/zona1/pregunta1/pista2/pista2.component';
import { Pista1Component as Zona3Pregunta2Pista1Component } from './pages/zonas/zona1/pregunta1/pista1/pista1.component';
import { Pista2Component as Zona3Pregunta2Pista2Component } from './pages/zonas/zona1/pregunta1/pista2/pista2.component';
import { Pista1Component as Zona3Pregunta3Pista1Component } from './pages/zonas/zona1/pregunta1/pista1/pista1.component';
import { Pista2Component as Zona3Pregunta3Pista2Component } from './pages/zonas/zona1/pregunta1/pista2/pista2.component';
import { Pista1Component as Zona3Pregunta4Pista1Component } from './pages/zonas/zona1/pregunta1/pista1/pista1.component';
import { Pista2Component as Zona3Pregunta4Pista2Component } from './pages/zonas/zona1/pregunta1/pista2/pista2.component';
import { Pista1Component as Zona3Pregunta5Pista1Component } from './pages/zonas/zona1/pregunta1/pista1/pista1.component';
import { Pista2Component as Zona3Pregunta5Pista2Component } from './pages/zonas/zona1/pregunta1/pista2/pista2.component';


import { Zona4Component } from './pages/zonas/zona4/zona4.component';
import { Pregunta1Component as Zona4Pregunta1Component } from './pages/zonas/zona4/pregunta1/pregunta1.component';
import { Pregunta2Component as Zona4Pregunta2Component } from './pages/zonas/zona4/pregunta2/pregunta2.component';
import { Pregunta3Component as Zona4Pregunta3Component } from './pages/zonas/zona4/pregunta3/pregunta3.component';
import { Pregunta4Component as Zona4Pregunta4Component } from './pages/zonas/zona4/pregunta4/pregunta4.component';
import { Pregunta5Component as Zona4Pregunta5Component } from './pages/zonas/zona4/pregunta5/pregunta5.component';
import { ActividadComponent as Zona4ActividadComponent } from './pages/zonas/zona4/actividad/actividad.component';
import { ExitoComponent as Zona4ExitoComponent } from './pages/zonas/zona4/exito/exito.component';
import { Pista1Component as Zona4Pregunta1Pista1Component } from './pages/zonas/zona1/pregunta1/pista1/pista1.component';
import { Pista2Component as Zona4Pregunta1Pista2Component } from './pages/zonas/zona1/pregunta1/pista2/pista2.component';
import { Pista1Component as Zona4Pregunta2Pista1Component } from './pages/zonas/zona1/pregunta1/pista1/pista1.component';
import { Pista2Component as Zona4Pregunta2Pista2Component } from './pages/zonas/zona1/pregunta1/pista2/pista2.component';
import { Pista1Component as Zona4Pregunta3Pista1Component } from './pages/zonas/zona1/pregunta1/pista1/pista1.component';
import { Pista2Component as Zona4Pregunta3Pista2Component } from './pages/zonas/zona1/pregunta1/pista2/pista2.component';
import { Pista1Component as Zona4Pregunta4Pista1Component } from './pages/zonas/zona1/pregunta1/pista1/pista1.component';
import { Pista2Component as Zona4Pregunta4Pista2Component } from './pages/zonas/zona1/pregunta1/pista2/pista2.component';
import { Pista1Component as Zona4Pregunta5Pista1Component } from './pages/zonas/zona1/pregunta1/pista1/pista1.component';
import { Pista2Component as Zona4Pregunta5Pista2Component } from './pages/zonas/zona1/pregunta1/pista2/pista2.component';


import { Zona5Component } from './pages/zonas/zona5/zona5.component';
import { Pregunta1Component as Zona5Pregunta1Component } from './pages/zonas/zona5/pregunta1/pregunta1.component';
import { Pregunta2Component as Zona5Pregunta2Component } from './pages/zonas/zona5/pregunta2/pregunta2.component';
import { Pregunta3Component as Zona5Pregunta3Component } from './pages/zonas/zona5/pregunta3/pregunta3.component';
import { Pregunta4Component as Zona5Pregunta4Component } from './pages/zonas/zona5/pregunta4/pregunta4.component';
import { Pregunta5Component as Zona5Pregunta5Component } from './pages/zonas/zona5/pregunta5/pregunta5.component';
import { ActividadComponent as Zona5ActividadComponent } from './pages/zonas/zona5/actividad/actividad.component';
import { ExitoComponent as Zona5ExitoComponent } from './pages/zonas/zona5/exito/exito.component';
import { Pista1Component as Zona5Pregunta1Pista1Component } from './pages/zonas/zona1/pregunta1/pista1/pista1.component';
import { Pista2Component as Zona5Pregunta1Pista2Component } from './pages/zonas/zona1/pregunta1/pista2/pista2.component';
import { Pista1Component as Zona5Pregunta2Pista1Component } from './pages/zonas/zona1/pregunta1/pista1/pista1.component';
import { Pista2Component as Zona5Pregunta2Pista2Component } from './pages/zonas/zona1/pregunta1/pista2/pista2.component';
import { Pista1Component as Zona5Pregunta3Pista1Component } from './pages/zonas/zona1/pregunta1/pista1/pista1.component';
import { Pista2Component as Zona5Pregunta3Pista2Component } from './pages/zonas/zona1/pregunta1/pista2/pista2.component';
import { Pista1Component as Zona5Pregunta4Pista1Component } from './pages/zonas/zona1/pregunta1/pista1/pista1.component';
import { Pista2Component as Zona5Pregunta4Pista2Component } from './pages/zonas/zona1/pregunta1/pista2/pista2.component';
import { Pista1Component as Zona5Pregunta5Pista1Component } from './pages/zonas/zona1/pregunta1/pista1/pista1.component';
import { Pista2Component as Zona5Pregunta5Pista2Component } from './pages/zonas/zona1/pregunta1/pista2/pista2.component';


export const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'home', component: HomeComponent },
  { path: 'context', component: ContextComponent },
  { path: 'instructions', component: InstructionsComponent },
  { path: 'contact', component: ContactoComponent },
  
  { path: 'zonas', component: ZonasComponent },

  { path: 'zona1', component: Zona1Component },
  { path: 'zona1/pregunta1', component: Zona1Pregunta1Component },
  { path: 'zona1/pregunta1/pista1', component: Zona1Pregunta1Pista1Component },
  { path: 'zona1/pregunta1/pista2', component: Zona1Pregunta1Pista2Component },
  { path: 'zona1/pregunta2', component: Zona1Pregunta2Component },
  { path: 'zona1/pregunta2/pista1', component: Zona1Pregunta2Pista1Component },
  { path: 'zona1/pregunta2/pista2', component: Zona1Pregunta2Pista2Component },
  { path: 'zona1/pregunta3', component: Zona1Pregunta3Component },
  { path: 'zona1/pregunta3/pista1', component: Zona1Pregunta3Pista1Component },
  { path: 'zona1/pregunta3/pista2', component: Zona1Pregunta3Pista2Component },
  { path: 'zona1/pregunta4', component: Zona1Pregunta4Component },
  { path: 'zona1/pregunta4/pista1', component: Zona1Pregunta4Pista1Component },
  { path: 'zona1/pregunta4/pista2', component: Zona1Pregunta4Pista2Component },
  { path: 'zona1/pregunta5', component: Zona1Pregunta5Component },
  { path: 'zona1/pregunta5/pista1', component: Zona1Pregunta5Pista1Component },
  { path: 'zona1/pregunta5/pista2', component: Zona1Pregunta5Pista2Component },
  { path: 'zona1/actividad', component: Zona1ActividadComponent },
  { path: 'zona1/exito', component: Zona1ExitoComponent },

  { path: 'zona2', component: Zona2Component },
  { path: 'zona2/pregunta1', component: Zona2Pregunta1Component },
  { path: 'zona2/pregunta1/pista1', component: Zona2Pregunta1Pista1Component },
  { path: 'zona2/pregunta1/pista2', component: Zona2Pregunta1Pista2Component },
  { path: 'zona2/pregunta2', component: Zona2Pregunta2Component },
  { path: 'zona2/pregunta2/pista1', component: Zona2Pregunta2Pista1Component },
  { path: 'zona2/pregunta2/pista2', component: Zona2Pregunta2Pista2Component },
  { path: 'zona2/pregunta3', component: Zona2Pregunta3Component },
  { path: 'zona2/pregunta3/pista1', component: Zona2Pregunta3Pista1Component },
  { path: 'zona2/pregunta3/pista2', component: Zona2Pregunta3Pista2Component },
  { path: 'zona2/pregunta4', component: Zona2Pregunta4Component },
  { path: 'zona2/pregunta4/pista1', component: Zona2Pregunta4Pista1Component },
  { path: 'zona2/pregunta4/pista2', component: Zona2Pregunta4Pista2Component },
  { path: 'zona2/pregunta5', component: Zona2Pregunta5Component },
  { path: 'zona2/pregunta5/pista1', component: Zona2Pregunta5Pista1Component },
  { path: 'zona2/pregunta5/pista2', component: Zona2Pregunta5Pista2Component },
  { path: 'zona2/actividad', component: Zona2ActividadComponent },
  { path: 'zona2/exito', component: Zona2ExitoComponent },

  { path: 'zona3', component: Zona3Component },
  { path: 'zona3/pregunta1', component: Zona3Pregunta1Component },
  { path: 'zona3/pregunta1/pista1', component: Zona3Pregunta1Pista1Component },
  { path: 'zona3/pregunta1/pista2', component: Zona3Pregunta1Pista2Component },
  { path: 'zona3/pregunta2', component: Zona3Pregunta2Component },
  { path: 'zona3/pregunta2/pista1', component: Zona3Pregunta2Pista1Component },
  { path: 'zona3/pregunta2/pista2', component: Zona3Pregunta2Pista2Component },
  { path: 'zona3/pregunta3', component: Zona3Pregunta3Component },
  { path: 'zona3/pregunta3/pista1', component: Zona3Pregunta3Pista1Component },
  { path: 'zona3/pregunta3/pista2', component: Zona3Pregunta3Pista2Component },
  { path: 'zona3/pregunta4', component: Zona3Pregunta4Component },
  { path: 'zona3/pregunta4/pista1', component: Zona3Pregunta4Pista1Component },
  { path: 'zona3/pregunta4/pista2', component: Zona3Pregunta4Pista2Component },
  { path: 'zona3/pregunta5', component: Zona3Pregunta5Component },
  { path: 'zona3/pregunta5/pista1', component: Zona3Pregunta5Pista1Component },
  { path: 'zona3/pregunta5/pista2', component: Zona3Pregunta5Pista2Component },
  { path: 'zona3/actividad', component: Zona3ActividadComponent },
  { path: 'zona3/exito', component: Zona3ExitoComponent },

  { path: 'zona4', component: Zona4Component },
  { path: 'zona4/pregunta1', component: Zona4Pregunta1Component },
  { path: 'zona4/pregunta1/pista1', component: Zona4Pregunta1Pista1Component },
  { path: 'zona4/pregunta1/pista2', component: Zona4Pregunta1Pista2Component },
  { path: 'zona4/pregunta2', component: Zona4Pregunta2Component },
  { path: 'zona4/pregunta2/pista1', component: Zona4Pregunta2Pista1Component },
  { path: 'zona4/pregunta2/pista2', component: Zona4Pregunta2Pista2Component },
  { path: 'zona4/pregunta3', component: Zona4Pregunta3Component },
  { path: 'zona4/pregunta3/pista1', component: Zona4Pregunta3Pista1Component },
  { path: 'zona4/pregunta3/pista2', component: Zona4Pregunta3Pista2Component },
  { path: 'zona4/pregunta4', component: Zona4Pregunta4Component },
  { path: 'zona4/pregunta4/pista1', component: Zona4Pregunta4Pista1Component },
  { path: 'zona4/pregunta4/pista2', component: Zona4Pregunta4Pista2Component },
  { path: 'zona4/pregunta5', component: Zona4Pregunta5Component },
  { path: 'zona4/pregunta5/pista1', component: Zona4Pregunta5Pista1Component },
  { path: 'zona4/pregunta5/pista2', component: Zona4Pregunta5Pista2Component },
  { path: 'zona4/actividad', component: Zona4ActividadComponent },
  { path: 'zona4/exito', component: Zona4ExitoComponent },

  { path: 'zona5', component: Zona5Component },
  { path: 'zona5/pregunta1', component: Zona5Pregunta1Component },
  { path: 'zona5/pregunta1/pista1', component: Zona5Pregunta1Pista1Component },
  { path: 'zona5/pregunta1/pista2', component: Zona5Pregunta1Pista2Component },
  { path: 'zona5/pregunta2', component: Zona5Pregunta2Component },
  { path: 'zona5/pregunta2/pista1', component: Zona5Pregunta2Pista1Component },
  { path: 'zona5/pregunta2/pista2', component: Zona5Pregunta2Pista2Component },
  { path: 'zona5/pregunta3', component: Zona5Pregunta3Component },
  { path: 'zona5/pregunta3/pista1', component: Zona5Pregunta3Pista1Component },
  { path: 'zona5/pregunta3/pista2', component: Zona5Pregunta3Pista2Component },
  { path: 'zona5/pregunta4', component: Zona5Pregunta4Component },
  { path: 'zona5/pregunta4/pista1', component: Zona5Pregunta4Pista1Component },
  { path: 'zona5/pregunta4/pista2', component: Zona5Pregunta4Pista2Component },
  { path: 'zona5/pregunta5', component: Zona5Pregunta5Component },
  { path: 'zona5/pregunta5/pista1', component: Zona5Pregunta5Pista1Component },
  { path: 'zona5/pregunta5/pista2', component: Zona5Pregunta5Pista2Component },
  { path: 'zona5/actividad', component: Zona5ActividadComponent },
  { path: 'zona5/exito', component: Zona5ExitoComponent },
];
