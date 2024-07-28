import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IntroComponent } from './pages/intro/intro.component';
import { ContextComponent } from './pages/context/context.component';
import { Prueba1Component } from './pages/prueba1/prueba1.component';
import { Prueba2Component } from './pages/prueba2/prueba2.component';

export const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'home', component: HomeComponent },
  { path: 'context', component: ContextComponent },
  { path: 'prueba1', component: Prueba1Component },
  { path: 'prueba2', component: Prueba2Component },
  { path: '**', redirectTo: 'home' } // Maneja rutas no encontradas
];
