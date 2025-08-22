import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { listaDeTarefas } from './componets/lista-de-tarefas/lista-de-tarefas.component'
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, listaDeTarefas],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-app';
}
