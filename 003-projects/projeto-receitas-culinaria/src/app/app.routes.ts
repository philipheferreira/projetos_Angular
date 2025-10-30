import { Routes } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ReceitasComponent } from './pages/receitas/receitas.component';

export const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'receitas', component: ReceitasComponent },
];
