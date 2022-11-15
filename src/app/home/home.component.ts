import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  diferenciais = [
    {
      ordem: 1,
      titulo: 'Materiais de estudo selecionados',
      descricao:
        ' Aprenda em diversos formatos, com os melhores conteúdos disponíveis. Uma trilha pensada especialmente pra quem está começando.',
    },
    {
      ordem: 2,
      titulo: 'Tire suas dúvidas',
      descricao:
        'Mentores respondem suas dúvidas sobre os conteúdos. Nossos sangues laranjas estarão por perto para responder suas principais questões durante a trilha toda!',
    },
    {
      ordem: 3,
      titulo: 'Aulas de Soft Skils',
      descricao:
        'É como dizem por aí “Hard Skill contrata, Soft Skill te mantém no emprego!”. Aprenda como desenvolver as Soft Skills mais solicitadas pelo mercado. ',
    },
    {
      ordem: 4,
      titulo: '100% gratuito e com certificado!',
      descricao:
        'Você já começa sua jornada com a peimeira certificação e com uma trilha gratuita.',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
