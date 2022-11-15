import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Modulo } from 'src/app/models/modulo.model';
import { ConteudoService } from 'src/app/services/conteudo.service';

@Component({
  selector: 'app-modal-excluir-conteudo',
  templateUrl: './modal-excluir-conteudo.component.html',
  styleUrls: ['./modal-excluir-conteudo.component.scss']
})
export class ModalExcluirConteudoComponent implements OnInit {

  conteudo!: Modulo;

  constructor(public dialogRef: MatDialogRef<ModalExcluirConteudoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private conteudosService: ConteudoService) { }

  ngOnInit(): void {
     this.conteudo = this.data;
  }


  excluirConteudo(): void {
    this.conteudosService.excluirConteudos(this.conteudo.id).subscribe(() => {
      this.fechar();
    })
  }

  fechar(): void {
    this.dialogRef.close();
  }
}
