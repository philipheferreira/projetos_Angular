import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'menu-funcional-sidebar-standalone';
  ativarMenuLateral = false;

  ativarEDesativarMenuLateral() {
    this.ativarMenuLateral = !this.ativarMenuLateral
  }
}
