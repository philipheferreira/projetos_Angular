import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class Contador {
  valor = 0;

  somar() {
    this.valor++;
  }

  subtrair() {
    this.valor--;
  }

  resetar() {
    this.valor = 0;
  }


}
