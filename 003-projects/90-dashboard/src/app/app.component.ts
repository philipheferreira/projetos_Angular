import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PartComponent} from './part-component/part-component.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dashboard';
}
