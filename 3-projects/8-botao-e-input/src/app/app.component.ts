import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BotaoEInputComponent } from './components/botao-e-input/botao-e-input.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BotaoEInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'botao-e-input';
}
