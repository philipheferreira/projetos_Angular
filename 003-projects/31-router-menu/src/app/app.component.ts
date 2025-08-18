import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeiroComponente } from './components/primeiro-componente/primeiro-componente.component';
import { SegundoComponente } from './components/segundo-componente/segundo-componente.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PrimeiroComponente, SegundoComponente],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'router-menu';
}
