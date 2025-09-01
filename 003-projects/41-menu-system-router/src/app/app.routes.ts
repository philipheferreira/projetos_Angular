import { Routes } from '@angular/router';
import { ContatoComponent } from './components/contato/contato.component';
import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';

export const routes: Routes = [
  { path: 'contato', component: ContatoComponent },
  { path: 'home', component: HomeComponent },
  { path: 'sobre', component: SobreComponent }
];
