import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-depoimentos',
  templateUrl: './card-depoimentos.component.html',
  styleUrls: ['./card-depoimentos.component.scss'],
})
export class CardDepoimentosComponent implements OnInit {
  @Input() imagem = '';
  @Input() depoimento = '';
  @Input() aluno = '';
  @Input() cargo = '';
  constructor() {}

  ngOnInit(): void {}
}
