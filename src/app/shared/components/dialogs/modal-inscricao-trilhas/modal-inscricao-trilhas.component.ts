import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdicionarTrilhasRequest } from 'src/app/models/adicionar-trilhas.model';
import { Trilha } from 'src/app/models/trilha.model';
import { TrilhaService } from 'src/app/services/trilha.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-modal-inscricao-trilhas',
  templateUrl: './modal-inscricao-trilhas.component.html',
  styleUrls: ['./modal-inscricao-trilhas.component.scss']
})
export class ModalInscricaoTrilhasComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalInscricaoTrilhasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Trilha[],
    private trilhaService: TrilhaService,
    private userService: UserService) { }
    
  trilhas: Trilha[] = [];

  ngOnInit(): void {
    this.obterTrilhas();
  }

  obterTrilhas(): void {
    this.trilhaService.obterTrilhas().subscribe(response => {
      response.forEach(trilha => {
        const selecionada = this.data.find(x => x.id == trilha.id);
        let trilhaSelecionada: Trilha = {
          id: trilha.id,
          nome: trilha.nome,
          selecionada: selecionada != null
        };

        this.trilhas.push(trilhaSelecionada);
      });
    })
  }

  adicionarTrilha(): void {
    const trilhaFilter = this.trilhas.filter(x => x.selecionada);

    let trilhasSelecionadas: number[] = [];
    trilhaFilter.forEach(element => {
      trilhasSelecionadas.push(element.id);
    });

    const adicionarTrilhas: AdicionarTrilhasRequest = {
      trilhas: trilhasSelecionadas
    }

    this.userService.adicionarTrilhasUsuario(adicionarTrilhas).subscribe(() => {
      this.dialogRef.close(true);
    });
  }

  selecionarTrilha(event: any, trilha: Trilha): void {
    trilha.selecionada = event.checked;
  }

  fechar(): void {
    this.dialogRef.close();
  }
}
