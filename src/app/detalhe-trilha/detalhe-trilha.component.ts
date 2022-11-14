import { Usuario } from './../models/usuario-response.model';
import { User } from './../models/user.model';
import { Component, OnInit } from '@angular/core';
import { DetalheTrilha } from '../models/detalheTrilha.model';
import { TrilhaService } from '../services/trilha.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalhe-trilha',
  templateUrl: './detalhe-trilha.component.html',
  styleUrls: ['./detalhe-trilha.component.scss'],
})
export class DetalheTrilhaComponent implements OnInit {
  detalheTrilha!: DetalheTrilha;

  constructor(private trilhaService: TrilhaService,
                private router: Router) {
  }

  getDetalhesTrilha(id: number): void {
    const usuario = this.trilhaService.LocalStorage.obterUsuario();

    this.trilhaService
      .oberDetalhesTrilhas(usuario.id)
      .subscribe((detalhe) => (this.detalheTrilha = detalhe));
  }

  ngOnInit(): void {
    const usuario = this.trilhaService.LocalStorage.obterUsuario();
    if (usuario == null){
      this.router.navigate(['/login']);
      return;
    }

    this.getDetalhesTrilha(usuario.id);
  }
}
