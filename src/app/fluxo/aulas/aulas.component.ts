import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TrilhaService } from './../../services/trilha.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aula } from 'src/app/models/aula.model';
import { ConteudoService } from 'src/app/services/conteudo.service';
import { DialogService } from 'src/app/services/dialog.service';
import { Usuario } from 'src/app/models/usuario-response.model';
import { Modulo } from 'src/app/models/modulo.model';

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.scss']
})
export class AulasComponent implements OnInit {

  aula!: any;
  forumForm!: FormGroup;
  usuario!: Usuario;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private dialogService: DialogService,
    private trilhaService: TrilhaService) { }

  ngOnInit(): void {
    this.createFormDuvida();

    this.usuario = this.trilhaService.LocalStorage.obterUsuario();
    if (this.usuario == null) {
      this.router.navigate(['/login']);
      return;
    }

    const idAula = this.activatedRoute.snapshot.params['idAula'];
    const idTrilha = this.activatedRoute.snapshot.params['idTrilha'];
    this.obterConteudo(idTrilha, idAula);

  }

  obterConteudo(idTrilha: number, idAula: number): void {
    this.trilhaService.obterAulas(idTrilha, idAula).subscribe(response => {
      this.aula = response;
    })
  }

  adicionarConteudo(): void {
    const data = {
      title: 'Selecionar trilhas',
      message: 'Selecione suas trilhas',
    };

    this.dialogService.openAula(data);
    result: () => {

      // quando fecha o modal executa este trecho
      // this.listarTrilhasUsuario();
    }
  }

  createFormDuvida(): void {
    this.forumForm = this.fb.group({
      forum: ['', [Validators.required]]
    });
  }

  enviarDuvida(): void {
    this.forumForm.reset();
  }

  excluirConteudo(conteudo: Modulo): void {

    this.dialogService.excluirConteudo(conteudo);
    result: () => {
    }
  }

  editarConteudo(conteudo: Modulo): void {
    this.dialogService.openEdicaoConteudo(conteudo, this.activatedRoute.snapshot.params['idAula']);
    result: () => {
    }
  }

  cadastrarConteudo(): void {
    this.dialogService.openCadastrarConteudo(this.aula ,this.activatedRoute.snapshot.params['idAula']);
    result: () => {
    }
  }
}
