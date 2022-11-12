import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Trilha } from 'src/app/models/trilha.model';
import { User } from 'src/app/models/user.model';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { TrilhaService } from 'src/app/services/trilha.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  hide = true;
  cadastroForm!: FormGroup;
  trilhas: Trilha[] = [];

  constructor(private fb: FormBuilder,
    private trilhaService: TrilhaService,
    private userService: UserService,
    private snackBarService: SnackBarService,
    private router: Router) { }

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

      checkboxLgpd: ['', [Validators.required]],
    });
  }

  adicionarConta(): void {
    const trilhas = this.trilhas.filter(x => x.selecionada);
    let user: User = {
      nome: this.cadastroForm.get('nome')?.value,
      email: this.cadastroForm.get('email')?.value,
      senha: this.cadastroForm.get('senha')?.value,
      trilhas: []
    }

    trilhas.forEach(trilhaFiltrada => {
      user.trilhas.push(trilhaFiltrada.id);
    });


    this.userService.cadastrarUsuario(user)
      .subscribe(response => {
        this.cadastroForm.reset();
        if (response != null) {
          this.snackBarService.openSuccess(['Bem vindo!']);
          this.userService.LocalStorage.salvarDadosLocaisUsuario(response);
          this.router.navigate(['/dashboard-perfil']);
        }
      })
  }

  get formControls() {
    return this.cadastroForm.controls;
  }

  selecionarTrilha(event: any, trilha: Trilha): void {
    trilha.selecionada = event.currentTarget.checked;
  }

  obterTrilha(): void {
    this.trilhaService.obterTrilhas()
      .subscribe(x => {
        this.trilhas = x;
      })
  }

}
