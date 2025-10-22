import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contador',
  imports: [FormsModule],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class Contador {
  valor = 0;
  valorInput = 0;

  somar() {
    this.valor += this.valorInput;
    this.valorInput = 0;
  }

  subtrair() {
    this.valor -= this.valorInput;
    this.valorInput = 0;
  }

  resetar() {
    this.valor = 0;
  }


}
