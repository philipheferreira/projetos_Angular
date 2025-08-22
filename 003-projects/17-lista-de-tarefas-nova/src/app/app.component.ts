import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; // chamando a biblioteca forms dentro do angular
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, BrowserModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  novaTarefa: string = '';
  tarefas: { titulo: string; concluido: boolean }[] = [];

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
