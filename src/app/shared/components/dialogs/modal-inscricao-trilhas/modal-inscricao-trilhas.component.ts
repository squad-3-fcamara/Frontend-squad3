import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-modal-inscricao-trilhas',
  templateUrl: './modal-inscricao-trilhas.component.html',
  styleUrls: ['./modal-inscricao-trilhas.component.scss']
})
export class ModalInscricaoTrilhasComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalInscricaoTrilhasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

  fechar(): void {
    this.dialogRef.close();
  }

}
