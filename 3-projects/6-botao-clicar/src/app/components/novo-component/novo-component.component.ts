import { Component } from '@angular/core';

@Component({
  selector: 'app-novo-component',
  imports: [],
  templateUrl: './novo-component.component.html',
  styleUrl: './novo-component.component.css'
})
export class NovoComponentComponent {
    public informacao = 'Ola, está é uma informação de Alerta atraves de uma variavel'

    public alerta(){
      alert(`${this.informacao}`)
    }
}
