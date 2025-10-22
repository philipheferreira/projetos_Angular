import { Routes } from '@angular/router';
import { ContatoComponent } from './components/contato/contato.component';
import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';


export const routes: Routes = [
  { path: '', component: HomeComponent }, // Rota Padrão. Inicializa com a chamada router-outlet
  { path: 'contato', component: ContatoComponent },
  { path: 'sobre', component: SobreComponent }
];
