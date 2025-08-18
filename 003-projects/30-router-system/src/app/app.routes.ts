import { Routes } from '@angular/router';
import { AppComponent } from './app.component'
import { PrimeiroComponente } from './components/component-first/component-first.component';
import { SegundoComponente } from './components/component-second/component-second.component'

export const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'primeiro', component: PrimeiroComponente },
  { path: 'segundo', component: SegundoComponente },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
