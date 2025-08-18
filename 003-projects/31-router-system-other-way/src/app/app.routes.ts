import { Routes } from '@angular/router';
import { PrimeiroComponente } from './components/primeiro-componente/primeiro-componente.component';
import { SegundoComponente } from './components/segundo-componente/segundo-componente.component';

export const appRoutes: Routes = [
  { path: 'primeiro-componente', component: PrimeiroComponente },
  { path: 'segundo-componente', component: SegundoComponente },
  { path: '', redirectTo: '/primeiro-componente', pathMatch: 'full' },
];
