import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-diferenciais',
  templateUrl: './card-diferenciais.component.html',
  styleUrls: ['./card-diferenciais.component.scss'],
})
export class CardDiferenciaisComponent implements OnInit {
  @Input() ordem = 0;
  @Input() titulo = '';
  @Input() descricao = '';
  constructor() {}

  ngOnInit(): void {}
}
