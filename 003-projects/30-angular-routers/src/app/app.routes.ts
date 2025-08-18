import { Routes } from '@angular/router';
import { primeiroComponent } from './components/component-first/component-first.component';
import { segundoComponent } from './components/component-second/component-second.component'

export const routes: Routes = [
  { path: 'first', component: primeiroComponent },
  { path: 'second', component: segundoComponent },
  { path: '', redirectTo: '/first', pathMatch: 'full' }
];
