import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PrimeiroComponente } from './components/primeiro-componente/primeiro-componente.component';
import { SegundoComponente } from './components/segundo-componente/segundo-componente.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'primeiro', component: PrimeiroComponente },
  { path: 'segundo', component: SegundoComponente }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
