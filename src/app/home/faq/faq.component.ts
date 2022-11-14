import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {
  faqs = [
    {
      index: 1,
      pergunta: 'Posso fazer mais de uma trilha?',
      resposta:
        'Sim, você pode fazer quantas trilhas quiser! E ao mesmo tempo. Tudo gratuitamente.',
    },
    {
      index: 2,
      pergunta: 'É possível pular módulos?',
      resposta:
        'Sim, apesar da nossa trilha ser pensada para você ir seguindo os caminhos. Você podeir para algum conteúdo específico no menu da trilha.',
    },
    {
      index: 3,
      pergunta: 'É preciso ter computador para fazer o curso?',
      resposta:
        'Não necessáriamente. Facilita bastante o processo se você conseguir aplicar o conteúdo. Mas você pode assistir as aulas e aplicar depois em outro momento. ',
    },
    {
      index: 4,
      pergunta: 'Tem certificado de conclusão da trilha?',
      resposta:
        'Sim! O certificado é emitido com o seu nome e a data de conclusão após a conclusão da trilha. ',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
