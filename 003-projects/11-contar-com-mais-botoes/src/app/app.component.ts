import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contador } from './components/contador/contador.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Contador],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'contar-com-mais-botoes';
}
