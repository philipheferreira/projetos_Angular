import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component' // direciona o caminho para o compnent

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NewComponent], // importa o component e as bibliotecas 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '4-component';
}
