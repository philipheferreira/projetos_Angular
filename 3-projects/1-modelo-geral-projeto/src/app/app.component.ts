import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet], // importa as funcionalidades a serem usadas
  templateUrl: './app.component.html', // seleciona esse arquivo HTML como o arquivo marckdown do componente
  styleUrl: './app.component.css' // Adiciona o arquivo css como o Style desse componente
})
export class AppComponent { // criar variaveis para serem utilizadas
  title = '1-modelo-geral-projeto';
}
