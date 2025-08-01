import { Component } from '@angular/core';

@Component({
  selector: 'app-component-dois',  // forma que o component é chamado em um component externo
  imports: [], // permite fazer imports nesse component
  templateUrl: './component-dois.component.html',
  styleUrl: './component-dois.component.css'
})
export class ComponentDois {
  public variavel = 'Sou uma variavel criada no componente dois';
  public numero1 = 20
  public numero2: number = 40 // posso tipar o valor para especificar que essa variavel só pode receber valores do tipo numero

  public soma(valor1: number, valor2: number) {
    return valor1 + valor2
  }

} // Edição de nome para ser feita a chamada igual como ele está definido no componente principal
