import { Component, OnInit } from '@angular/core';
import { DetalheTrilha } from '../models/detalheTrilha.model';
import { TrilhaService } from '../services/trilha.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Aula } from '../models/aula.model';
import { DialogService } from '../services/dialog.service';
import { UserService } from '../services/user.service';
import { Inscricoes } from '../models/inscricoes.model';
import { Usuario } from '../models/usuario-response.model';

@Component({
  selector: 'app-detalhe-trilha',
  templateUrl: './detalhe-trilha.component.html',
  styleUrls: ['./detalhe-trilha.component.scss'],
})
export class DetalheTrilhaComponent implements OnInit {
  detalheTrilha!: DetalheTrilha;
  usuario!: Usuario;

  constructor(private trilhaService: TrilhaService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dialogService: DialogService,
    private userService: UserService) {
  }

  ngOnInit(): void {
    this.usuario = this.trilhaService.LocalStorage.obterUsuario();
    if (this.usuario == null) {
      this.router.navigate(['/login']);
      return;
    }



    if (this.activatedRoute.snapshot.params['id']) {
      this.getDetalhesTrilha(this.activatedRoute.snapshot.params['id']);
    }
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
    // const data = {
    //   title: 'Selecionar trilhas',
    //   message: 'Selecione suas trilhas', 
    // };

    // this.dialogService.openSelecionarTrilhas(data);
    // result: () => {
    //   this.listarTrilhasUsuario();
    // }
  }

  listarTrilhasUsuario(): void {
    this.userService.getInscricoesUser().subscribe(() => {})
  }

}
