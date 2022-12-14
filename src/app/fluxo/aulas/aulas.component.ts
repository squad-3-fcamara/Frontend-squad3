import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TrilhaService } from './../../services/trilha.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aula } from 'src/app/models/aula.model';
import { ConteudoService } from 'src/app/services/conteudo.service';
import { DialogService } from 'src/app/services/dialog.service';
import { Usuario } from 'src/app/models/usuario-response.model';
import { Modulo } from 'src/app/models/modulo.model';
import { AulaDetalhes, ConteudosDaAula } from 'src/app/models/aula-detalhes.model';
import { MenuItemBaseComponent } from 'src/app/menu-base/menu-item-base.component';
import { Menu } from 'src/app/models/menu.model';

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.scss']
})
export class AulasComponent extends MenuItemBaseComponent implements OnInit {

  aula!: AulaDetalhes;
  forumForm!: FormGroup;
  usuario!: Usuario;
  menu: Menu[] = [];

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private dialogService: DialogService,
    private trilhaService: TrilhaService) {  super()}

  ngOnInit(): void {
    this.criarMenu();
    this.createFormDuvida();

    this.usuario = this.trilhaService.LocalStorage.obterUsuario();
    if (this.usuario == null) {
      this.router.navigate(['/login']);
      return;
    }

    this.obterConteudo();
  }

  criarMenu(): void {
    this.menu.push(this.itemHome);
    this.menu.push(this.itemMinhasTrilhas);
    this.menu.push(this.itemSininho);
    this.menu.push(this.itemSair);
  }

  obterConteudo(): void {
    const idAula = this.activatedRoute.snapshot.params['idAula'];
    const idTrilha = this.activatedRoute.snapshot.params['idTrilha'];
    this.trilhaService.obterAulas(idTrilha, idAula).subscribe(response => {
      this.aula = response;
    })
  }

  createFormDuvida(): void {
    this.forumForm = this.fb.group({
      forum: ['', [Validators.required]]
    });
  }

  enviarDuvida(): void {
    this.forumForm.reset();
  }

  excluirConteudo(conteudo: ConteudosDaAula): void {

    const data = conteudo;
    this.dialogService.excluirConteudo(data, {
      result: (confirmed: boolean) => {
        if (confirmed) {
          this.obterConteudo();
        }
      }
    });
  }

  editarConteudo(conteudo: ConteudosDaAula): void {
    const idAula = this.activatedRoute.snapshot.params['idAula'];
    const data = conteudo;
    this.dialogService.openEdicaoConteudo(data, idAula, conteudo.id, {
      result: (confirmed: boolean) => {
        if (confirmed) {
          this.obterConteudo();
        }
      }
    });
  }

  cadastrarConteudo(): void {

    this.dialogService.openCadastrarConteudo(this.aula, this.activatedRoute.snapshot.params['idAula'], {
      result: (confirmed: boolean) => {
        if (confirmed) {
          this.obterConteudo();
        }
      }
    });
  }

  contemLivros(): boolean {
    const contemLivros = this.aula.conteudosDaAula.find(x => x.tipo == 'livro');
    if (contemLivros)
      return true;

    return false;
  }
}
