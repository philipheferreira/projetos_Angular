import { Component } from '@angular/core';

@Component({
  selector: 'app-component-dois',  // forma que o component é chamado em um component externo
  imports: [], // permite fazer imports nesse component
  templateUrl: './component-dois.component.html',
  styleUrl: './component-dois.component.css'
})
export class ComponentDois {} // Edição de nome para ser feita a chamada igual como ele está definido no componente principal
