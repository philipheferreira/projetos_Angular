import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-modal1',
  imports: [MatDialogModule],
  templateUrl: './modal1.component.html',
  styleUrl: './modal1.component.css'
})
export class Modal1Component {
  constructor(
    public dialogRef: MatDialogRef<Modal1Component>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  fechar(): void {
    this.dialogRef.close();
  }
}
