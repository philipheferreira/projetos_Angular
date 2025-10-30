import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Modal1Component } from '../../component/modals/modal1/modal1.component';
import { Modal2Component } from '../../component/modals/modal2/modal2.component';

@Component({
  selector: 'app-receitas',
  imports: [],
  templateUrl: './receitas.component.html',
  styleUrl: './receitas.component.css'
})
export class ReceitasComponent {

  constructor(private dialog: MatDialog) { }

  abrirPrimeiroModal() {
    this.dialog.open(Modal1Component);
  }

  abrirSegundoModal() {
    this.dialog.open(Modal2Component);
  }
}
