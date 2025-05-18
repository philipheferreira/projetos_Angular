import { Component } from '@angular/core';

@Component({
  selector: 'app-component-um', // forma que o component é chamado em um component externo
  standalone: true, // permite fazer imports nesse component
  imports: [],
  templateUrl: './component-um.component.html',
  styleUrl: './component-um.component.css'
})
export class ComponentUm {
  public variavel = 'Sou uma variavel criada no componente um'
} // Edição de nome para ser feita a chamada igual como ele está definido no componente principal
