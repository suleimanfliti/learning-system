import { Component,Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Confirmation } from 'src/app/interfaces/confirmation.type';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss' ] ,  
   encapsulation: ViewEncapsulation.None

})
export class DialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Confirmation,
    public matDialogRef: MatDialogRef<DialogComponent>
)
{
}
  ngOnInit(): void {
  }

}
