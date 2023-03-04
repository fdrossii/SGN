import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private router: Router
  ) {}

  get title(): string {
    return this.data.title;
  }

  get mensaje(): string {
    return this.data.message;
  }
  
  get url(): string{
    return this.data.url;
  }

  close(): void {
    this.dialogRef.close();
    this.router.navigate([this.url]);    
  }

}
