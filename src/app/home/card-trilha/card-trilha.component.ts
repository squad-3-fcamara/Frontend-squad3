import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-trilha',
  templateUrl: './card-trilha.component.html',
  styleUrls: ['./card-trilha.component.scss'],
})
export class CardTrilhaComponent implements OnInit {
  trilhas = [
    {
      titulo: 'UX/UI Designer',
      descricao: 'Desenvolver interfaces e compreender todo o processo de UX.',
    },
    {
      titulo: 'Desenvolvedor Full Stack',
      descricao:
        'Aprenda a programar do zero. Programe nas principais linguagens.',
    },
    {
      titulo: 'Quality Assurance (QA)',
      descricao:
        'Aprenda a analisar todos os aspectos de utilização do software ou aplicação.',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
