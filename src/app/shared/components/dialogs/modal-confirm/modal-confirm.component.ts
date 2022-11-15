import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConteudosDaAula } from 'src/app/models/aula-detalhes.model';
import { ConfirmDialogData } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss']
})
export class ModalConfirmComponent implements OnInit {

  
  conteudo!: ConteudosDaAula;

  constructor(public dialogRef: MatDialogRef<ModalConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData) { }

  ngOnInit(): void {
    debugger;
    console.log(this.data);
    console.log(this.dialogRef);
  }

  fechar(): void {
    this.dialogRef.close();
  }

  confirmaExcluir(): void {
    this.dialogRef.close(true);
  }

}
