import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConteudoService } from 'src/app/services/conteudo.service';
import { ConfirmDialogData } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-modal-excluir-conteudo',
  templateUrl: './modal-excluir-conteudo.component.html',
  styleUrls: ['./modal-excluir-conteudo.component.scss']
})
export class ModalExcluirConteudoComponent implements OnInit {

  conteudo!: any;

  constructor(public dialogRef: MatDialogRef<ModalExcluirConteudoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData,
    private conteudosService: ConteudoService) { }

  ngOnInit(): void {
     this.conteudo = this.data;
  }


  excluirConteudo(): void {
    this.conteudosService.excluirConteudos(this.conteudo.id).subscribe(() => {
      this.dialogRef.close(true);
    })
  }

  fechar(): void {
    this.dialogRef.close();
  }
}
