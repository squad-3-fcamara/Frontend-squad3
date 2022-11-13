import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-trilha',
  templateUrl: './card-trilha.component.html',
  styleUrls: ['./card-trilha.component.scss'],
})
export class CardTrilhaComponent implements OnInit {
  @Input() titulo: string = '';
  @Input() descricao: string = '';
  constructor() {}

  ngOnInit(): void {}
}
