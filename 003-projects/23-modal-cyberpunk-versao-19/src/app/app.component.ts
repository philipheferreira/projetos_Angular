import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModalCyberpunkComponent } from './component/modals/modal-cyberpunk/modal-cyberpunk.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private dialog: MatDialog) {}

  abrirModal(): void {

    this.dialog.open(ModalCyberpunkComponent, {
      height: '500px',
        width: '600px',
        data: { nome: 'Philiphe' } // passando dados para o modal
      });

  }
}
