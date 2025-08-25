import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // chamando a biblioteca forms dentro do angular
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  imports: [FormsModule], // importando o formsModule para usar as operacoes como o ngModel
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class todoComponent {

  itens: {id: number, nome: string, concluido: boolean}[] = [];
  id: number = 1;
  receberTarefa: string = '';

  adicionarItem = () => {

    this.itens.push({

      id: this.id,
      nome: this.receberTarefa,
      concluido: false

    })

    this.receberTarefa = '';
    this.id++;
  }

  getItens = (concluido: boolean) => {

    return this.itens.filter(item => item.concluido === concluido);

  }

  setFinalizadas = (id: number) => {

    const index = this.itens.findIndex(item => item.id === id);

    if (index !== -1) {
      const estadoAtual = this.itens[index].concluido;
      this.itens[index].concluido = !estadoAtual;
    }
  }
}
