import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NovoComponentComponent } from './components/novo-component/novo-component.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NovoComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'botao-clicar';
}
