import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { todoComponent } from './components/todo/todo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, todoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-todo-list';
}
