import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Modal1Component } from './component/modals/modal1/modal1.component'
import { Modal2Component } from './component/modals/modal2/modal2.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'exemplo-2-modais';

  constructor(private dialog: MatDialog) {}

  abrirPrimeiroModal() {
    this.dialog.open(Modal1Component, {
      width: '400px',
      data: { nome: 'Philiphe' } // passando dados para o modal
    });
  }
  abrirSegundoModal() {
    this.dialog.open(Modal2Component, {
      width: '400px',
      data: { nome: 'Philiphe' } // passando dados para o modal
    });
  }
}
