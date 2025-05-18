import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '6-botao-disable';
}
