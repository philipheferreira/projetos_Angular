import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>{{title}}</h1>
    <p>Usando um template criado dentro do component.ts</p>
  `, // tag que cria localmente um espaço html para ser editado
  styles:`
  h1 {
    font-size: 3.125rem;
    color: var(--gray-900);
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -0.125rem;
    margin: 0;
    font-family: "Inter Tight", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
  }

  p {
    margin: 0;
    color: var(--gray-700);
  }
  ` // cria localmente um espaço localmente para editar css
})
export class AppComponent { // criando variaveis
  title = '3-modelo-component-ts-centro';
}
