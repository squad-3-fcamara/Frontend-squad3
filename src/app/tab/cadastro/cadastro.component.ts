import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  hide = true;
  cadastroForm!: FormGroup;
  
  constructor(private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.cadastroForm = this.fb.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    });
  }

  adicionarConta(): void {}

  get formControls() {
    return this.cadastroForm.controls;
  }

}
