import { Routes } from '@angular/router';
import { IntroComponent } from './pages/intro/intro.component';

import { HomeComponent } from './pages/home/home.component';
import { ContextComponent } from './pages/context/context.component';
import { InstructionsComponent } from './pages/instructions/instructions.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ZonasComponent } from './pages/zonas/zonas.component';

export const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'home', component: HomeComponent },
  { path: 'context', component: ContextComponent },
  { path: 'instructions', component: InstructionsComponent },
  { path: 'zonas', component: ZonasComponent},
  { path: 'contact', component: ContactoComponent },
  { path: '**', redirectTo: 'home' } // Maneja rutas no encontradas
];
