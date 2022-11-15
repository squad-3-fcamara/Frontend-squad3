import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inscricoes } from 'src/app/models/inscricoes.model';
import { Trilha } from 'src/app/models/trilha.model';
import { DialogService } from 'src/app/services/dialog.service';
import { TrilhaService } from 'src/app/services/trilha.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-exibir-trilhas',
  templateUrl: './exibir-trilhas.component.html',
  styleUrls: ['./exibir-trilhas.component.scss']
})
export class ExibirTrilhasComponent implements OnInit {

  inscricoes!: Inscricoes;
  constructor(
    private trilhaService: TrilhaService,
    private dialogService: DialogService,
    private router: Router,
    private userService: UserService) { }

  ngOnInit(): void {
    const usuario = this.trilhaService.LocalStorage.obterUsuario();
    if (usuario == null) {
      this.router.navigate(['/login']);
      return;
    }
    
    this.listarTrilhasUsuario();
  }

  listarTrilhasUsuario(): void {
    this.userService.getInscricoesUser().subscribe(response => [
      this.inscricoes = response
    ])
  }

  adicionarTrilhas(): void {

  this.dialogService.openSelecionarTrilhas(this.inscricoes.trilhas);
    result: () => {
      this.listarTrilhasUsuario();
    }
  }

  continuarTrilha(trilha: Trilha): void {
    this.router.navigate([`/detalhe-trilha/${trilha.id}`]);
  }
}
