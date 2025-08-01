import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentUm } from './components/component-um/component-um.component'
import { ComponentDois } from './components/component-dois/component-dois.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponentUm, ComponentDois], // local que é definido a chamda de biblioteca e componentes
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-dois-components';
}
