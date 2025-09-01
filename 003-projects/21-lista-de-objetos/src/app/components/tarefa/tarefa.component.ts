import { Component } from '@angular/core';
import { Tarefa } from './tarefa.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarefa',
  imports: [CommonModule],
  templateUrl: './tarefa.component.html',
  styleUrl: './tarefa.component.css'
})
export class TarefaComponent {
  tarefas: Tarefa[] = [ // chama o model criado para receber as tarefas criadas com base nas caracteristicas
    { id: 1, titulo: 'Tarefa 1', concluida: false },
    { id: 2, titulo: 'Tarefa 2', concluida: true },
    { id: 3, titulo: 'Tarefa 3', concluida: false },
  ];
}
