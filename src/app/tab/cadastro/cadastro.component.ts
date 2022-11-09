import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Trilha } from 'src/app/models/trilha.model';
import { TrilhaService } from 'src/app/services/trilha.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  hide = true;
  cadastroForm!: FormGroup;
  trilhas: Trilha[]= [];

  constructor(private fb: FormBuilder,
    private trilhaService: TrilhaService) { }

  ngOnInit(): void {
    this.createForm();
    this.obterTrilha();
  }

  createForm(): void {
    // const email = new FormControl('', [Validators.required, CustomValidatorsHelpers.validEmail]);
    // const confirmarSenha = new FormControl('', [Validators.required,  CustomValidators.equalTo(email)]);
    
    this.cadastroForm = this.fb.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required]],
      senha: ['', [Validators.required]],
      confirmarSenha: ['', [Validators.required]],
      trilha: ['', [Validators.required]],
    });
  }

  adicionarConta(): void {}

  get formControls() {
    return this.cadastroForm.controls;
  }

  obterTrilha(): void {
    this.trilhaService.obterTrilhas()
      .subscribe(x => {
        this.trilhas = x;
      })
  }

}
