import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TrilhaService } from './../../services/trilha.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aula } from 'src/app/models/aula.model';
import { ConteudoService } from 'src/app/services/conteudo.service';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.scss']
})
export class AulasComponent implements OnInit {

  @ViewChild('videoPlayer') videoplayer!: ElementRef;
  videoSource = '//www.youtube.com/watch?v=_RsYz_iKP4k';

  aula!: any;
  forumForm!: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private dialogService: DialogService,
    private trilhaService: TrilhaService) { }

  ngOnInit(): void {
    this.createFormDuvida();

    const usuario = this.trilhaService.LocalStorage.obterUsuario();
    if (usuario == null) {
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
}
