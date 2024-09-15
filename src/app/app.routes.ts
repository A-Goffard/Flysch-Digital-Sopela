import { Routes } from '@angular/router';
import { IntroComponent } from './pages/intro/intro.component';
import { HomeComponent } from './pages/home/home.component';
import { ContextComponent } from './pages/context/context.component';
import { InstructionsComponent } from './pages/instructions/instructions.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ZonasComponent } from './pages/zonas/zonas.component';
import { PortalComponent } from './pages/portal/portal.component';
//Misiones
import { Pistas1Component } from './pages/misiones/mision1/pistas/pistas.component';
import { Pistas2Component } from './pages/misiones/mision2/pistas/pistas.component';
import { Pistas3Component } from './pages/misiones/mision3/pistas/pistas.component';
import { Pistas4Component } from './pages/misiones/mision4/pistas/pistas.component';
import { Pistas5Component } from './pages/misiones/mision5/pistas/pistas.component';
import { Pistas6Component } from './pages/misiones/mision6/pistas/pistas.component';
import { Pistas7Component } from './pages/misiones/mision7/pistas/pistas.component';
import { Pistas8Component } from './pages/misiones/mision8/pistas/pistas.component';
import { Pistas9Component } from './pages/misiones/mision9/pistas/pistas.component';
import { Pistas10Component } from './pages/misiones/mision10/pistas/pistas.component';

// Zona 1

import { Zona1Component } from './pages/zonas/zona1/zona1.component';
import { Pregunta1Component as Zona1Pregunta1Component } from './pages/zonas/zona1/pregunta1/pregunta1.component';
import { Pregunta2Component as Zona1Pregunta2Component } from './pages/zonas/zona1/pregunta2/pregunta2.component';
import { Pregunta3Component as Zona1Pregunta3Component } from './pages/zonas/zona1/pregunta3/pregunta3.component';
import { Pregunta4Component as Zona1Pregunta4Component } from './pages/zonas/zona1/pregunta4/pregunta4.component';
import { Pregunta5Component as Zona1Pregunta5Component } from './pages/zonas/zona1/pregunta5/pregunta5.component';
import { Actividad1Component as Zona1Actividad1Component } from './pages/zonas/zona1/actividades/actividad1/actividad1.component';
import { Zona1Actividad1Hecho1Component } from './pages/zonas/zona1/actividades/actividad1/hecho/hecho.component'; 
import { FalloComponent as Zona1Actividad1Fallo1Component } from './pages/zonas/zona1/actividades/actividad1/fallo/fallo.component'; 
import { Pista1Component as Zona1Pregunta1Pista1Component } from './pages/zonas/zona1/pregunta1/pista1/pista1.component';
import { Pista2Component as Zona1Pregunta1Pista2Component } from './pages/zonas/zona1/pregunta1/pista2/pista2.component';
import { Pista1Component as Zona1Pregunta2Pista1Component } from './pages/zonas/zona1/pregunta2/pista1/pista1.component';
import { Pista2Component as Zona1Pregunta2Pista2Component } from './pages/zonas/zona1/pregunta2/pista2/pista2.component';
import { Pista1Component as Zona1Pregunta3Pista1Component } from './pages/zonas/zona1/pregunta3/pista1/pista1.component';
import { Pista2Component as Zona1Pregunta3Pista2Component } from './pages/zonas/zona1/pregunta3/pista2/pista2.component';
import { Pista1Component as Zona1Pregunta4Pista1Component } from './pages/zonas/zona1/pregunta4/pista1/pista1.component';
import { Pista2Component as Zona1Pregunta4Pista2Component } from './pages/zonas/zona1/pregunta4/pista2/pista2.component';
import { Pista1Component as Zona1Pregunta5Pista1Component } from './pages/zonas/zona1/pregunta5/pista1/pista1.component';
import { Pista2Component as Zona1Pregunta5Pista2Component } from './pages/zonas/zona1/pregunta5/pista2/pista2.component';
import { Explicacion1Component as Zona1Pregunta1Explicacion1 } from './pages/zonas/zona1/pregunta1/explicacion1/explicacion1.component';
import { Explicacion2Component as Zona1Pregunta2Explicacion2 } from './pages/zonas/zona1/pregunta2/explicacion2/explicacion2.component';
import { Explicacion3Component as Zona1Pregunta3Explicacion3 } from './pages/zonas/zona1/pregunta3/explicacion3/explicacion3.component';
import { Explicacion4Component as Zona1Pregunta4Explicacion4 } from './pages/zonas/zona1/pregunta4/explicacion4/explicacion4.component';
import { Explicacion5Component as Zona1Pregunta5Explicacion5 } from './pages/zonas/zona1/pregunta5/explicacion5/explicacion5.component';
import { MasInfoComponent as Zona1MasInformacion } from './pages/zonas/zona1/mas-info/mas-info.component';

// Zona 2

import { Zona2Component } from './pages/zonas/zona2/zona2.component';
import { Pregunta1Component as Zona2Pregunta1Component } from './pages/zonas/zona2/pregunta1/pregunta1.component';
import { Pregunta2Component as Zona2Pregunta2Component } from './pages/zonas/zona2/pregunta2/pregunta2.component';
import { Pregunta3Component as Zona2Pregunta3Component } from './pages/zonas/zona2/pregunta3/pregunta3.component';
import { Pregunta4Component as Zona2Pregunta4Component } from './pages/zonas/zona2/pregunta4/pregunta4.component';
import { Pregunta5Component as Zona2Pregunta5Component } from './pages/zonas/zona2/pregunta5/pregunta5.component';
import { Actividad1Component as Zona2Actividad1Component } from './pages/zonas/zona2/actividades/actividad1/actividad1.component';
import { Zona2Actividad1Hecho1Component } from './pages/zonas/zona2/actividades/actividad1/hecho/hecho.component'; 
import { FalloComponent as Zona2Actividad1Fallo1Component } from './pages/zonas/zona2/actividades/actividad1/fallo/fallo.component'; 
import { Pista1Component as Zona2Pregunta1Pista1Component } from './pages/zonas/zona2/pregunta1/pista1/pista1.component';
import { Pista2Component as Zona2Pregunta1Pista2Component } from './pages/zonas/zona2/pregunta1/pista2/pista2.component';
import { Pista1Component as Zona2Pregunta2Pista1Component } from './pages/zonas/zona2/pregunta2/pista1/pista1.component';
import { Pista2Component as Zona2Pregunta2Pista2Component } from './pages/zonas/zona2/pregunta2/pista2/pista2.component';
import { Pista1Component as Zona2Pregunta3Pista1Component } from './pages/zonas/zona2/pregunta3/pista1/pista1.component';
import { Pista2Component as Zona2Pregunta3Pista2Component } from './pages/zonas/zona2/pregunta3/pista2/pista2.component';
import { Pista1Component as Zona2Pregunta4Pista1Component } from './pages/zonas/zona2/pregunta4/pista1/pista1.component';
import { Pista2Component as Zona2Pregunta4Pista2Component } from './pages/zonas/zona2/pregunta4/pista2/pista2.component';
import { Pista1Component as Zona2Pregunta5Pista1Component } from './pages/zonas/zona2/pregunta5/pista1/pista1.component';
import { Pista2Component as Zona2Pregunta5Pista2Component } from './pages/zonas/zona2/pregunta5/pista2/pista2.component';
import { Explicacion1Component as Zona2Pregunta1Explicacion1 } from './pages/zonas/zona2/pregunta1/explicacion1/explicacion1.component';
import { Explicacion2Component as Zona2Pregunta2Explicacion2 } from './pages/zonas/zona2/pregunta2/explicacion2/explicacion2.component';
import { Explicacion3Component as Zona2Pregunta3Explicacion3 } from './pages/zonas/zona2/pregunta3/explicacion3/explicacion3.component';
import { Explicacion4Component as Zona2Pregunta4Explicacion4 } from './pages/zonas/zona2/pregunta4/explicacion4/explicacion4.component';
import { Explicacion5Component as Zona2Pregunta5Explicacion5 } from './pages/zonas/zona2/pregunta5/explicacion5/explicacion5.component';
import { MasInfoComponent as Zona2MasInformacion } from './pages/zonas/zona2/mas-info/mas-info.component';

// Zona 3

import { Zona3Component } from './pages/zonas/zona3/zona3.component';
import { Pregunta1Component as Zona3Pregunta1Component } from './pages/zonas/zona3/pregunta1/pregunta1.component';
import { Pregunta2Component as Zona3Pregunta2Component } from './pages/zonas/zona3/pregunta2/pregunta2.component';
import { Pregunta3Component as Zona3Pregunta3Component } from './pages/zonas/zona3/pregunta3/pregunta3.component';
import { Pregunta4Component as Zona3Pregunta4Component } from './pages/zonas/zona3/pregunta4/pregunta4.component';
import { Pregunta5Component as Zona3Pregunta5Component } from './pages/zonas/zona3/pregunta5/pregunta5.component';
import { Actividad1Component as Zona3Actividad1Component } from './pages/zonas/zona3/actividades/actividad1/actividad1.component';
import { Actividad2Component as Zona3Actividad2Component } from './pages/zonas/zona3/actividades/actividad2/actividad2.component';
import { Actividad3Component as Zona3Actividad3Component } from './pages/zonas/zona3/actividades/actividad3/actividad3.component';
import { Actividad4Component as Zona3Actividad4Component } from './pages/zonas/zona3/actividades/actividad4/actividad4.component';
import { Zona3Actividad1Hecho1Component } from './pages/zonas/zona3/actividades/actividad1/hecho/hecho.component'; 
import { Zona3Actividad2Hecho2Component } from './pages/zonas/zona3/actividades/actividad2/hecho/hecho.component'; 
import { Zona3Actividad3Hecho3Component } from './pages/zonas/zona3/actividades/actividad3/hecho/hecho.component'; 
import { Zona3Actividad4Hecho4Component } from './pages/zonas/zona3/actividades/actividad4/hecho/hecho.component'; 
import { FalloComponent as Zona3Actividad1Fallo1Component } from './pages/zonas/zona3/actividades/actividad1/fallo/fallo.component'; 
import { FalloComponent as Zona3Actividad2Fallo2Component } from './pages/zonas/zona3/actividades/actividad2/fallo/fallo.component'; 
import { FalloComponent as Zona3Actividad3Fallo3Component } from './pages/zonas/zona3/actividades/actividad3/fallo/fallo.component'; 
import { FalloComponent as Zona3Actividad4Fallo4Component } from './pages/zonas/zona3/actividades/actividad4/fallo/fallo.component'; 
import { Pista1Component as Zona3Pregunta1Pista1Component } from './pages/zonas/zona3/pregunta1/pista1/pista1.component';
import { Pista2Component as Zona3Pregunta1Pista2Component } from './pages/zonas/zona3/pregunta1/pista2/pista2.component';
import { Pista1Component as Zona3Pregunta2Pista1Component } from './pages/zonas/zona3/pregunta2/pista1/pista1.component';
import { Pista2Component as Zona3Pregunta2Pista2Component } from './pages/zonas/zona3/pregunta2/pista2/pista2.component';
import { Pista1Component as Zona3Pregunta3Pista1Component } from './pages/zonas/zona3/pregunta3/pista1/pista1.component';
import { Pista2Component as Zona3Pregunta3Pista2Component } from './pages/zonas/zona3/pregunta3/pista2/pista2.component';
import { Pista1Component as Zona3Pregunta4Pista1Component } from './pages/zonas/zona3/pregunta4/pista1/pista1.component';
import { Pista2Component as Zona3Pregunta4Pista2Component } from './pages/zonas/zona3/pregunta4/pista2/pista2.component';
import { Pista1Component as Zona3Pregunta5Pista1Component } from './pages/zonas/zona3/pregunta5/pista1/pista1.component';
import { Pista2Component as Zona3Pregunta5Pista2Component } from './pages/zonas/zona3/pregunta5/pista2/pista2.component';
import { Explicacion1Component as Zona3Pregunta1Explicacion1 } from './pages/zonas/zona3/pregunta1/explicacion1/explicacion1.component';
import { Explicacion2Component as Zona3Pregunta2Explicacion2 } from './pages/zonas/zona3/pregunta2/explicacion2/explicacion2.component';
import { Explicacion3Component as Zona3Pregunta3Explicacion3 } from './pages/zonas/zona3/pregunta3/explicacion3/explicacion3.component';
import { Explicacion4Component as Zona3Pregunta4Explicacion4 } from './pages/zonas/zona3/pregunta4/explicacion4/explicacion4.component';
import { Explicacion5Component as Zona3Pregunta5Explicacion5 } from './pages/zonas/zona3/pregunta5/explicacion5/explicacion5.component';
import { MasInfoComponent as Zona3MasInformacion } from './pages/zonas/zona3/mas-info/mas-info.component';

// Zona 4

import { Zona4Component } from './pages/zonas/zona4/zona4.component';
import { Pregunta1Component as Zona4Pregunta1Component } from './pages/zonas/zona4/pregunta1/pregunta1.component';
import { Pregunta2Component as Zona4Pregunta2Component } from './pages/zonas/zona4/pregunta2/pregunta2.component';
import { Pregunta3Component as Zona4Pregunta3Component } from './pages/zonas/zona4/pregunta3/pregunta3.component';
import { Pregunta4Component as Zona4Pregunta4Component } from './pages/zonas/zona4/pregunta4/pregunta4.component';
import { Pregunta5Component as Zona4Pregunta5Component } from './pages/zonas/zona4/pregunta5/pregunta5.component';
import { Actividad1Component as Zona4Actividad1Component } from './pages/zonas/zona4/actividades/actividad1/actividad1.component';
import { Actividad2Component as Zona4Actividad2Component } from './pages/zonas/zona4/actividades/actividad2/actividad2.component';
import { Zona4Actividad1Hecho1Component } from './pages/zonas/zona4/actividades/actividad1/hecho/hecho.component'; 
import { Zona4Actividad2Hecho2Component } from './pages/zonas/zona4/actividades/actividad2/hecho/hecho.component'; 
import { FalloComponent as Zona4Actividad1Fallo1Component } from './pages/zonas/zona4/actividades/actividad1/fallo/fallo.component'; 
import { FalloComponent as Zona4Actividad2Fallo2Component } from './pages/zonas/zona4/actividades/actividad2/fallo/fallo.component'; 
import { Pista1Component as Zona4Pregunta1Pista1Component } from './pages/zonas/zona4/pregunta1/pista1/pista1.component';
import { Pista2Component as Zona4Pregunta1Pista2Component } from './pages/zonas/zona4/pregunta1/pista2/pista2.component';
import { Pista1Component as Zona4Pregunta2Pista1Component } from './pages/zonas/zona4/pregunta2/pista1/pista1.component';
import { Pista2Component as Zona4Pregunta2Pista2Component } from './pages/zonas/zona4/pregunta2/pista2/pista2.component';
import { Pista1Component as Zona4Pregunta3Pista1Component } from './pages/zonas/zona4/pregunta3/pista1/pista1.component';
import { Pista2Component as Zona4Pregunta3Pista2Component } from './pages/zonas/zona4/pregunta3/pista2/pista2.component';
import { Pista1Component as Zona4Pregunta4Pista1Component } from './pages/zonas/zona4/pregunta4/pista1/pista1.component';
import { Pista2Component as Zona4Pregunta4Pista2Component } from './pages/zonas/zona4/pregunta4/pista2/pista2.component';
import { Pista1Component as Zona4Pregunta5Pista1Component } from './pages/zonas/zona4/pregunta5/pista1/pista1.component';
import { Pista2Component as Zona4Pregunta5Pista2Component } from './pages/zonas/zona4/pregunta5/pista2/pista2.component';
import { Explicacion1Component as Zona4Pregunta1Explicacion1 } from './pages/zonas/zona4/pregunta1/explicacion1/explicacion1.component';
import { Explicacion2Component as Zona4Pregunta2Explicacion2 } from './pages/zonas/zona4/pregunta2/explicacion2/explicacion2.component';
import { Explicacion3Component as Zona4Pregunta3Explicacion3 } from './pages/zonas/zona4/pregunta3/explicacion3/explicacion3.component';
import { Explicacion4Component as Zona4Pregunta4Explicacion4 } from './pages/zonas/zona4/pregunta4/explicacion4/explicacion4.component';
import { Explicacion5Component as Zona4Pregunta5Explicacion5 } from './pages/zonas/zona4/pregunta5/explicacion5/explicacion5.component';
import { MasInfoComponent as Zona4MasInformacion } from './pages/zonas/zona4/mas-info/mas-info.component';

// Zona 5

import { Zona5Component } from './pages/zonas/zona5/zona5.component';
import { Pregunta1Component as Zona5Pregunta1Component } from './pages/zonas/zona5/pregunta1/pregunta1.component';
import { Pregunta2Component as Zona5Pregunta2Component } from './pages/zonas/zona5/pregunta2/pregunta2.component';
import { Pregunta3Component as Zona5Pregunta3Component } from './pages/zonas/zona5/pregunta3/pregunta3.component';
import { Pregunta4Component as Zona5Pregunta4Component } from './pages/zonas/zona5/pregunta4/pregunta4.component';
import { Pregunta5Component as Zona5Pregunta5Component } from './pages/zonas/zona5/pregunta5/pregunta5.component';
import { Actividad1Component as Zona5Actividad1Component } from './pages/zonas/zona5/actividades/actividad1/actividad1.component';
import { Actividad2Component as Zona5Actividad2Component } from './pages/zonas/zona5/actividades/actividad2/actividad2.component';
import { Zona5Actividad1Hecho1Component } from './pages/zonas/zona5/actividades/actividad1/hecho/hecho.component'; 
import { Zona5Actividad2Hecho2Component } from './pages/zonas/zona5/actividades/actividad2/hecho/hecho.component'; 
import { FalloComponent as Zona5Actividad1Fallo1Component } from './pages/zonas/zona5/actividades/actividad1/fallo/fallo.component'; 
import { FalloComponent as Zona5Actividad2Fallo2Component } from './pages/zonas/zona5/actividades/actividad2/fallo/fallo.component'; 
import { Pista1Component as Zona5Pregunta1Pista1Component } from './pages/zonas/zona5/pregunta1/pista1/pista1.component';
import { Pista2Component as Zona5Pregunta1Pista2Component } from './pages/zonas/zona5/pregunta1/pista2/pista2.component';
import { Pista1Component as Zona5Pregunta2Pista1Component } from './pages/zonas/zona5/pregunta2/pista1/pista1.component';
import { Pista2Component as Zona5Pregunta2Pista2Component } from './pages/zonas/zona5/pregunta2/pista2/pista2.component';
import { Pista1Component as Zona5Pregunta3Pista1Component } from './pages/zonas/zona5/pregunta3/pista1/pista1.component';
import { Pista2Component as Zona5Pregunta3Pista2Component } from './pages/zonas/zona5/pregunta3/pista2/pista2.component';
import { Pista1Component as Zona5Pregunta4Pista1Component } from './pages/zonas/zona5/pregunta4/pista1/pista1.component';
import { Pista2Component as Zona5Pregunta4Pista2Component } from './pages/zonas/zona5/pregunta4/pista2/pista2.component';
import { Pista1Component as Zona5Pregunta5Pista1Component } from './pages/zonas/zona5/pregunta5/pista1/pista1.component';
import { Pista2Component as Zona5Pregunta5Pista2Component } from './pages/zonas/zona5/pregunta5/pista2/pista2.component';
import { Explicacion1Component as Zona5Pregunta1Explicacion1 } from './pages/zonas/zona5/pregunta1/explicacion1/explicacion1.component';
import { Explicacion2Component as Zona5Pregunta2Explicacion2 } from './pages/zonas/zona5/pregunta2/explicacion2/explicacion2.component';
import { Explicacion3Component as Zona5Pregunta3Explicacion3 } from './pages/zonas/zona5/pregunta3/explicacion3/explicacion3.component';
import { Explicacion4Component as Zona5Pregunta4Explicacion4 } from './pages/zonas/zona5/pregunta4/explicacion4/explicacion4.component';
import { Explicacion5Component as Zona5Pregunta5Explicacion5 } from './pages/zonas/zona5/pregunta5/explicacion5/explicacion5.component';
import { MasInfoComponent as Zona5MasInformacion } from './pages/zonas/zona5/mas-info/mas-info.component';


export const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'home', component: HomeComponent },
  { path: 'context', component: ContextComponent },
  { path: 'instructions', component: InstructionsComponent },
  { path: 'contact', component: ContactoComponent },
  { path: 'portal', component: PortalComponent },
  { path: 'pista1', component: Pistas1Component },
  { path: 'pista2', component: Pistas2Component },
  { path: 'pista3', component: Pistas3Component },
  { path: 'pista4', component: Pistas4Component },
  { path: 'pista5', component: Pistas5Component },
  { path: 'pista6', component: Pistas6Component },
  { path: 'pista7', component: Pistas7Component },
  { path: 'pista8', component: Pistas8Component },
  { path: 'pista9', component: Pistas9Component },
  { path: 'pista10', component: Pistas10Component },

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
  { path: 'zona1/actividades/actividad1', component: Zona1Actividad1Component },
  { path: 'zona1/actividades/actividad1/hecho', component: Zona1Actividad1Hecho1Component },
  { path: 'zona1/actividades/actividad1/fallo', component: Zona1Actividad1Fallo1Component },
  { path: 'zona1/pregunta1/explicacion1', component: Zona1Pregunta1Explicacion1 },
  { path: 'zona1/pregunta2/explicacion2', component: Zona1Pregunta2Explicacion2 },
  { path: 'zona1/pregunta3/explicacion3', component: Zona1Pregunta3Explicacion3 },
  { path: 'zona1/pregunta4/explicacion4', component: Zona1Pregunta4Explicacion4 },
  { path: 'zona1/pregunta5/explicacion5', component: Zona1Pregunta5Explicacion5 },
  { path: 'zona1/mas-info', component: Zona1MasInformacion },

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
  { path: 'zona2/actividades/actividad1', component: Zona2Actividad1Component },
  { path: 'zona2/actividades/actividad1/hecho', component: Zona2Actividad1Hecho1Component },
  { path: 'zona2/actividades/actividad1/fallo', component: Zona2Actividad1Fallo1Component },
  { path: 'zona2/pregunta1/explicacion1', component: Zona2Pregunta1Explicacion1 },
  { path: 'zona2/pregunta2/explicacion2', component: Zona2Pregunta2Explicacion2 },
  { path: 'zona2/pregunta3/explicacion3', component: Zona2Pregunta3Explicacion3 },
  { path: 'zona2/pregunta4/explicacion4', component: Zona2Pregunta4Explicacion4 },
  { path: 'zona2/pregunta5/explicacion5', component: Zona2Pregunta5Explicacion5 },
  { path: 'zona2/mas-info', component: Zona2MasInformacion },
  
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
  { path: 'zona3/actividades/actividad1', component: Zona3Actividad1Component },
  { path: 'zona3/actividades/actividad1/hecho', component: Zona3Actividad1Hecho1Component },
  { path: 'zona3/actividades/actividad1/fallo', component: Zona3Actividad1Fallo1Component },
  { path: 'zona3/actividades/actividad2', component: Zona3Actividad2Component },
  { path: 'zona3/actividades/actividad2/hecho', component: Zona3Actividad2Hecho2Component },
  { path: 'zona3/actividades/actividad2/fallo', component: Zona3Actividad2Fallo2Component },
  { path: 'zona3/actividades/actividad3', component: Zona3Actividad3Component },
  { path: 'zona3/actividades/actividad3/hecho', component: Zona3Actividad3Hecho3Component },
  { path: 'zona3/actividades/actividad3/fallo', component: Zona3Actividad3Fallo3Component },
  { path: 'zona3/actividades/actividad4', component: Zona3Actividad4Component },
  { path: 'zona3/actividades/actividad4/hecho', component: Zona3Actividad4Hecho4Component },
  { path: 'zona3/actividades/actividad4/fallo', component: Zona3Actividad4Fallo4Component },
  { path: 'zona3/pregunta1/explicacion1', component: Zona3Pregunta1Explicacion1 },
  { path: 'zona3/pregunta2/explicacion2', component: Zona3Pregunta2Explicacion2 },
  { path: 'zona3/pregunta3/explicacion3', component: Zona3Pregunta3Explicacion3 },
  { path: 'zona3/pregunta4/explicacion4', component: Zona3Pregunta4Explicacion4 },
  { path: 'zona3/pregunta5/explicacion5', component: Zona3Pregunta5Explicacion5 },
  { path: 'zona3/mas-info', component: Zona3MasInformacion },
  
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
  { path: 'zona4/actividades/actividad1', component: Zona4Actividad1Component },
  { path: 'zona4/actividades/actividad1/hecho', component: Zona4Actividad1Hecho1Component },
  { path: 'zona4/actividades/actividad1/fallo', component: Zona4Actividad1Fallo1Component },
  { path: 'zona4/actividades/actividad2', component: Zona4Actividad2Component },
  { path: 'zona4/actividades/actividad2/hecho', component: Zona4Actividad2Hecho2Component },
  { path: 'zona4/actividades/actividad2/fallo', component: Zona4Actividad2Fallo2Component },
  { path: 'zona4/pregunta1/explicacion1', component: Zona4Pregunta1Explicacion1 },
  { path: 'zona4/pregunta2/explicacion2', component: Zona4Pregunta2Explicacion2 },
  { path: 'zona4/pregunta3/explicacion3', component: Zona4Pregunta3Explicacion3 },
  { path: 'zona4/pregunta4/explicacion4', component: Zona4Pregunta4Explicacion4 },
  { path: 'zona4/pregunta5/explicacion5', component: Zona4Pregunta5Explicacion5 },
  { path: 'zona4/mas-info', component: Zona4MasInformacion },
  
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
  { path: 'zona5/actividades/actividad1', component: Zona5Actividad1Component },
  { path: 'zona5/actividades/actividad1/hecho', component: Zona5Actividad1Hecho1Component },
  { path: 'zona5/actividades/actividad1/fallo', component: Zona5Actividad1Fallo1Component },
  { path: 'zona5/actividades/actividad2', component: Zona5Actividad2Component },
  { path: 'zona5/actividades/actividad2/hecho', component: Zona5Actividad2Hecho2Component },
  { path: 'zona5/actividades/actividad2/fallo', component: Zona5Actividad2Fallo2Component },
  { path: 'zona5/pregunta1/explicacion1', component: Zona5Pregunta1Explicacion1 },
  { path: 'zona5/pregunta2/explicacion2', component: Zona5Pregunta2Explicacion2 },
  { path: 'zona5/pregunta3/explicacion3', component: Zona5Pregunta3Explicacion3 },
  { path: 'zona5/pregunta4/explicacion4', component: Zona5Pregunta4Explicacion4 },
  { path: 'zona5/pregunta5/explicacion5', component: Zona5Pregunta5Explicacion5 },
  { path: 'zona5/mas-info', component: Zona5MasInformacion },

];
