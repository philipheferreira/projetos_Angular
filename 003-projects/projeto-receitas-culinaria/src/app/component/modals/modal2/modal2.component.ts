import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-modal2',
  imports: [MatDialogModule],
  templateUrl: './modal2.component.html',
  styleUrl: './modal2.component.css'
})
export class Modal2Component {

  constructor(
    public dialogRef: MatDialogRef<Modal2Component>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  fechar(): void {
    this.dialogRef.close();
  }

}
