import { Component } from '@angular/core';
import { Tarefa } from './tarefa.model'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarefa',
  imports: [CommonModule],
  templateUrl: './tarefa.component.html',
  styleUrl: './tarefa.component.css'
})
export class TarefaComponent {
 tarefas: Tarefa[] = [
  {id: 1, titulo: 'Estudar Angular', concluida: false},
  {id: 2, titulo: 'Fazer Exercícios', concluida: true},
  {id: 3, titulo: 'Ler documentação', concluida: false}
 ]
}
