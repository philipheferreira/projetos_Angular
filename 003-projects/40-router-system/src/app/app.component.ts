import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeiroComponente } from './components/component-first/component-first.component';
import { SegundoComponente } from './components/component-second/component-second.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PrimeiroComponente, SegundoComponente],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-routers';
}
