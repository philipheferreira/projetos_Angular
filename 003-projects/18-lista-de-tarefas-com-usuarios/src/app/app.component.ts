import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TarefasComponente } from './components/tarefas/tarefas.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TarefasComponente],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lista-de-tarefas-com-usuarios';
}
