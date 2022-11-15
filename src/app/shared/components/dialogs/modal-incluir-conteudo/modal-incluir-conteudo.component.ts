import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Modulo } from 'src/app/models/modulo.model';
import { ConteudoService } from 'src/app/services/conteudo.service';

@Component({
  selector: 'app-modal-incluir-conteudo',
  templateUrl: './modal-incluir-conteudo.component.html',
  styleUrls: ['./modal-incluir-conteudo.component.scss']
})
export class ModalIncluirConteudoComponent implements OnInit {

  cadastroForm!: FormGroup;

  constructor(public dialogRef: MatDialogRef<ModalIncluirConteudoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private conteudosService: ConteudoService,
    private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {

    this.cadastroForm = this.fb.group({
      id_aula: [this.data.idAula],
      nome: ['', [Validators.required]],
      link: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      autor: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      ordem: [this.data.detalhes.conteudosDaAula.length + 1],
    });
  }

  cadastrarConteudo(): void {

    let conteudo = this.cadastroForm.getRawValue();
    this.conteudosService.cadastrarConteudos(conteudo).subscribe(() => {
      this.fechar();
    })
  }

  fechar(): void {
    this.dialogRef.close();
  }
}
