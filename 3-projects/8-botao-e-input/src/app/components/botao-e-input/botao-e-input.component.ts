import { Component } from '@angular/core';

@Component({
  selector: 'app-botao-e-input',
  imports: [],
  templateUrl: './botao-e-input.component.html',
  styleUrl: './botao-e-input.component.css'
})
export class BotaoEInputComponent {
  texto: string = ''; // Tipando o texto retornando que ele é um tipo string e só pode receber string

  mostrarAlerta() {
    alert(this.texto || 'Campo Vazio!!');
  }
}
