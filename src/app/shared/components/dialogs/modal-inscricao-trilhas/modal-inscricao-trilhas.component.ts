import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-modal-inscricao-trilhas',
  templateUrl: './modal-inscricao-trilhas.component.html',
  styleUrls: ['./modal-inscricao-trilhas.component.scss']
})
export class ModalInscricaoTrilhasComponent implements OnInit {
  addTrilhaForm!: FormGroup;

  constructor(public dialogRef: MatDialogRef<ModalInscricaoTrilhasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: FormBuilder,) { }

  ngOnInit(): void {
    
    this.addTrilhaForm = this.fb.group({
      escolha: ['']
    
    });
  }


  fechar(): void {
    this.dialogRef.close();
  }
  adicionarTrilha():void{}

  }
