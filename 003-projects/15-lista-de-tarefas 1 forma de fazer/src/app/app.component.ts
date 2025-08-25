import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TarefasComponent } from './components/tarefas/tarefas.component'
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TarefasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lista-de-tarefas';
}
