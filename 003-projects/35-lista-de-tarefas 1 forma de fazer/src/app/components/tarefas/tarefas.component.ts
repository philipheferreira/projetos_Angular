import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // adicionando as funcionalidades de forms para a aplicação desse componente
import { CommonModule } from '@angular/common'; // adicionando as funcionalidades dentro de BrowserModule para esse componente

@Component({
  selector: 'app-tarefas',
  imports: [CommonModule, FormsModule],
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.css'
})
export class TarefasComponent {
  tarefas: string[] = [];
  novaTarefa: string = '';

  adicionarTarefa() {
    if (this.novaTarefa.trim()) {
      this.tarefas.push(this.novaTarefa.trim());
      this.novaTarefa = '';
    }
  }

  removerTarefa( index: number ) {
    this.tarefas.splice(index, 1);
  }
}
