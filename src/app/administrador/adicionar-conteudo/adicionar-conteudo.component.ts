import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogData } from 'src/app/services/dialog.service';
import { ModalInscricaoTrilhasComponent } from 'src/app/shared/components/dialogs/modal-inscricao-trilhas/modal-inscricao-trilhas.component';

@Component({
  selector: 'app-adicionar-conteudo',
  templateUrl: './adicionar-conteudo.component.html',
  styleUrls: ['./adicionar-conteudo.component.scss']
})
export class AdicionarConteudoComponent implements OnInit {

  adicionarConteudoForm!: FormGroup;

  constructor(public dialogRef: MatDialogRef<ModalInscricaoTrilhasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: FormBuilder,
    private router: Router) { }


  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    this.adicionarConteudoForm = this.fb.group({
      titulo: ['', [Validators.required]],
      link: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      tipoConteudo: ['', [Validators.required]],
      autor: ['', [Validators.required]],
    });
  }
  
  adicionarConteudo():void {
    this.router.navigate([`/adicionar-conteudo`]);
  }

  fecharModal(): void {
    this.dialogRef.close();
  }

  get formControls() {
    return this.adicionarConteudoForm.controls;
  }
}