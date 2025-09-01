import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-exemplo',
  imports: [ MatDialogModule],
  templateUrl: './modal-exemplo.component.html',
  styleUrl: './modal-exemplo.component.css'
})
export class ModalExemploComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalExemploComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  fechar(): void {
    this.dialogRef.close();
  }
}
