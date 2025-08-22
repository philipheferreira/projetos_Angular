import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // chamando a biblioteca forms dentro do angular
import { BrowserModule } from '@angular/platform-browser';

Component({
  selector: 'app-lista-de-tarefas',
  imports: [FormsModule, BrowserModule],
  templateUrl: './lista-de-tarefas.component.html',
  styleUrl: './lista-de-tarefas.component.css'
})

interface Tarefa {
  titulo: string;
  concluido: boolean
}

export class listaDeTarefas {
  novaTarefa: string = '';
  tarefas: Tarefa[] = [];

  adicionarTarefa(){
    if (this.novaTarefa.trim() !== '') {
      this.tarefas.push({ titulo: this.novaTarefa, concluido: false});
      this.novaTarefa = '';
    }
  }

  removerTarefa(index: number){
    this.tarefas.splice(index, 1);
  }

  toggleConcluido(index: number) {
    this.tarefas[index].concluido = !this.tarefas[index].concluido;
  }
}
