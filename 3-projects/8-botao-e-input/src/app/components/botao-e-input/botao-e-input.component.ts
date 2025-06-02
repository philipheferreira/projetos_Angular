import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // adicionado FormsModule

@Component({
  selector: 'app-botao-e-input',
  imports: [FormsModule], // importado forms module
  templateUrl: './botao-e-input.component.html',
  styleUrl: './botao-e-input.component.css'
})
export class BotaoEInputComponent {
  textoDigitado: string = '';

  mostrarAlerta() {
    alert(`Você digitou: ${this.textoDigitado}`);
  }
}
