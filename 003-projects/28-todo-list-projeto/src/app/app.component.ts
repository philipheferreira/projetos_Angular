import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todolist } from './components/todolist/todolist.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Todolist],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todolistprojeto';
}
