import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { TrilhaService } from 'src/app/services/trilha.service';
import { Component, OnInit } from '@angular/core';
import { Inscricoes } from 'src/app/models/inscricoes.model';
import { DialogService } from 'src/app/services/dialog.service';
import { trigger } from '@angular/animations';
import { Router } from '@angular/router';
import { Trilha } from 'src/app/models/trilha.model';
import { MenuItemBaseComponent } from 'src/app/menu-base/menu-item-base.component';
import { Menu } from 'src/app/models/menu.model';

@Component({
  selector: 'app-dashboard-perfil',
  templateUrl: './dashboard-perfil.component.html',
  styleUrls: ['./dashboard-perfil.component.scss']
})
export class DashboardPerfilComponent extends MenuItemBaseComponent implements OnInit {

  menu: Menu[] = [];
  inscricoes!: Inscricoes;
  constructor(
    private trilhaService: TrilhaService,
    private dialogService: DialogService,
    private router: Router,
    private userService: UserService) { super() }

  ngOnInit(): void {
    this.criarMenu();
    const usuario = this.trilhaService.LocalStorage.obterUsuario();
    if (usuario == null) {
      this.router.navigate(['/login']);
      return;
    }
    
    this.listarTrilhasUsuario();
  }

  criarMenu(): void {
    this.menu.push(this.itemHome);
    this.menu.push(this.itemMinhasTrilhas);
    this.menu.push(this.itemSininho);
    this.menu.push(this.itemSair);
  }

  listarTrilhasUsuario(): void {
    this.userService.getInscricoesUser().subscribe(response => [
      this.inscricoes = response
    ])
  }

  adicionarTrilhas(): void {

    const data = this.inscricoes.trilhas;
    this.dialogService.openSelecionarTrilhas(data,  {
      result: (confirmed: boolean) => {
        if (confirmed) {
          this.listarTrilhasUsuario();
        }
      }
    });
  }

  continuarTrilha(trilha: Trilha): void {
    this.router.navigate([`/detalhe-trilha/${trilha.id}`]);
  }
}
