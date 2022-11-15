import { Component, OnInit } from '@angular/core';
import { DetalheTrilha } from '../models/detalheTrilha.model';
import { TrilhaService } from '../services/trilha.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Aula } from '../models/aula.model';
import { DialogService } from '../services/dialog.service';
import { UserService } from '../services/user.service';
import { Inscricoes } from '../models/inscricoes.model';
import { Usuario } from '../models/usuario-response.model';
import { MenuItemBaseComponent } from '../menu-base/menu-item-base.component';
import { Menu } from '../models/menu.model';

@Component({
  selector: 'app-detalhe-trilha',
  templateUrl: './detalhe-trilha.component.html',
  styleUrls: ['./detalhe-trilha.component.scss'],
})
export class DetalheTrilhaComponent extends MenuItemBaseComponent implements OnInit {
  detalheTrilha!: DetalheTrilha;
  usuario!: Usuario;
  inscricoes!: Inscricoes;
  menu: Menu[] = [];

  constructor(private trilhaService: TrilhaService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dialogService: DialogService,
    private userService: UserService) {
      super()
  }

  ngOnInit(): void {
    this.criarMenu();
    this.usuario = this.trilhaService.LocalStorage.obterUsuario();
    if (this.usuario == null) {
      this.router.navigate(['/login']);
      return;
    }

    if (this.activatedRoute.snapshot.params['id']) {
      this.getDetalhesTrilha(this.activatedRoute.snapshot.params['id']);
    }

    this.listarTrilhasUsuario();
  }

  criarMenu(): void {
    this.menu.push(this.itemHome);
    this.menu.push(this.itemSuasTrilhas);
    this.menu.push(this.itemFAQ);
    this.menu.push(this.itemDiferenciais);
    this.menu.push(this.itemBotaoCadastro);
  }

  listarTrilhasUsuario(): void {
    this.userService.getInscricoesUser().subscribe(response => [
      this.inscricoes = response
    ])
  }

  getDetalhesTrilha(id: number): void {
    this.trilhaService.oberDetalhesTrilhas(id)
      .subscribe((detalhe) => (this.detalheTrilha = detalhe));
  }

  continuarAula(aula: Aula, detalheTrilha: DetalheTrilha): void {
    const idAula = aula.id;
    const idTrilha = detalheTrilha.trilha.id;
    this.router.navigate([`/aulas/${idTrilha}/${idAula}`]);
  }

  adicionarTrilhas(): void {
    const data = this.inscricoes.trilhas;
    this.dialogService.openSelecionarTrilhas(data, {
      result: (confirmed: boolean) => {
        if (confirmed) {
          this.listarTrilhasUsuario();
        }
      }
    });
  }

  continuarTrilha(): void {

    const idTrilha = this.detalheTrilha.trilha.id;
    const idAula = this.detalheTrilha.modulos[0].id;
    this.router.navigate([`/aulas/${idTrilha}/${idAula}`]);
  }

}
