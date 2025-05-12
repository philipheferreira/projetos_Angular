import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>{{title}}</h1>
    <p>Usando um template criado dentro do component.ts</p>
  `, // tag que cria localmente um espaço html para ser editado
  styles:`` // cria localmente um espaço localmente para editar css
})
export class AppComponent { // criando variaveis
  title = '3-modelo-component-ts-centro';
}
