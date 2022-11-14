import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aula } from 'src/app/models/aula.model';
import { ConteudoService } from 'src/app/services/conteudo.service';

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.scss']
})
export class AulasComponent implements OnInit {

  @ViewChild('videoPlayer') videoplayer!: ElementRef;
  videoSource = '//www.youtube.com/watch?v=_RsYz_iKP4k';

  aula!: Aula;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private conteudoService: ConteudoService) { }

  ngOnInit(): void {

    const usuario = this.conteudoService.LocalStorage.obterUsuario();
    if (usuario == null) {
      this.router.navigate(['/login']);
      return;
    }
    

    if (this.activatedRoute.snapshot.params['id']) {
      this.obterConteudo(this.activatedRoute.snapshot.params['id']);
    }
  }

  obterConteudo(id: number): void {
    this.conteudoService.obterConteudos(id).subscribe(response => {
      this.aula = response;
    })
  }

  toggleVideo() {
    this.videoplayer.nativeElement.play();
  }
}
