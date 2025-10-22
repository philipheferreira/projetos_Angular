import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-cyberpunk',
  imports: [MatDialogModule],
  templateUrl: './modal-cyberpunk.component.html',
  styleUrl: './modal-cyberpunk.component.css'
})
export class ModalCyberpunkComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalCyberpunkComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  fechar(): void {
    this.dialogRef.close();
  }

}
