import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModalExemploComponent } from './modal-exemplo/modal-exemplo.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private dialog: MatDialog) {}

  abrirModal() {
    this.dialog.open(ModalExemploComponent, {
      width: '400px',
      data: { nome: 'Philiphe' } // passando dados para o modal
    });
  }
}
