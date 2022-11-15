import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Modulo } from 'src/app/models/modulo.model';
import { ConteudoService } from 'src/app/services/conteudo.service';

@Component({
  selector: 'app-modal-editar-conteudo',
  templateUrl: './modal-editar-conteudo.component.html',
  styleUrls: ['./modal-editar-conteudo.component.scss']
})
export class ModalEditarConteudoComponent implements OnInit {

  conteudo!: Modulo;
  cadastroForm!: FormGroup;
  
  constructor(public dialogRef: MatDialogRef<ModalEditarConteudoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private conteudosService: ConteudoService,
    private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.createForm();
    this.conteudo = this.data.conteudo;
    this.patchValues();
  }

  createForm(): void {

    this.cadastroForm = this.fb.group({
      id_aula: [this.data.idAula],
      nome: ['', [Validators.required]],
      link: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      autor: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      ordem: ['', [Validators.required]],

    });
  }

  patchValues(): void {
    this.cadastroForm.patchValue(this.conteudo);
  }

  editarConteudo(): void {

    let conteudo = this.cadastroForm.getRawValue();
    this.conteudosService.editarConteudos(conteudo).subscribe(() => {
      this.fechar();
    })
  }

  fechar(): void {
    this.dialogRef.close();
  }
}
