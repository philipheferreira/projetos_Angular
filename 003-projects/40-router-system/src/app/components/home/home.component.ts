import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true, // Indica que este componente é independente. Necessario para fazer funcionar o systema de router corretamente
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
