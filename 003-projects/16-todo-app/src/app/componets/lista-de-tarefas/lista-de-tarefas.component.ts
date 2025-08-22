import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // chamando a biblioteca forms dentro do angular

@Component({
  selector: 'app-lista-de-tarefas',
  imports: [FormsModule],
  templateUrl: './lista-de-tarefas.component.html',
  styleUrl: './lista-de-tarefas.component.css'
})
export class listaDeTarefas {

}
