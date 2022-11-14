import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { TrilhaService } from 'src/app/services/trilha.service';
import { Component, OnInit } from '@angular/core';
import { Inscricoes } from 'src/app/models/inscricoes.model';
import { DialogService } from 'src/app/services/dialog.service';
import { trigger } from '@angular/animations';
import { Router } from '@angular/router';
import { Trilha } from 'src/app/models/trilha.model';

@Component({
  selector: 'app-dashboard-perfil',
  templateUrl: './dashboard-perfil.component.html',
  styleUrls: ['./dashboard-perfil.component.scss']
})
export class DashboardPerfilComponent implements OnInit {

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
    const data = {
      title: 'Selecionar trilhas',
      message: 'Selecione suas trilhas', 
    };

    this.dialogService.openSelecionarTrilhas(data);
    result: () => {
      this.listarTrilhasUsuario();
    }
  }

  continuarTrilha(trilha: Trilha): void {
    this.router.navigate([`/detalhe-trilha/${trilha.id}`]);
  }
}
