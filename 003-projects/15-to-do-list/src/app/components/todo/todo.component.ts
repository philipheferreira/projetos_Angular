import { Component } from '@angular/core';
import { Tarefa } from '../../tarefa.model'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  novaTarefa: string = '';
  tarefas: Tarefa[] = [];

  adicionarTarefa() {
    if (this.novaTarefa.trim()) {
      this.tarefas.push({titulo: this.novaTarefa, feito: false});
      this.novaTarefa = '';
    }
  }

  tarefaFinalizada(tarefa: Tarefa) {
    tarefa.feito = !tarefa.feito;
  }

  removerTarefa(index: number) {
    this.tarefas.splice(index, 1);
  }
}
