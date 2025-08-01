/* Tem um comando dentro do VS code que é selecionar a opção module em uma pasta
com o botão direito e digitar o nome. O resto module.ts vem com o resto do nome */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteHome } from './component/home/home.component';
import { ComponentSobre } from './component/sobre/sobre.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Rota padrão
  { path: 'home', component: ComponenteHome },
  { path: 'sobre', component: ComponentSobre }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModuleTsModule { }
