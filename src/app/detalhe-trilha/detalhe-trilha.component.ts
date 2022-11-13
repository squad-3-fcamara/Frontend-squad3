import { Component, OnInit } from '@angular/core';
import { DetalheTrilha } from '../models/detalheTrilha.model';
import { TrilhaService } from '../services/trilha.service';

@Component({
  selector: 'app-detalhe-trilha',
  templateUrl: './detalhe-trilha.component.html',
  styleUrls: ['./detalhe-trilha.component.scss'],
})
export class DetalheTrilhaComponent implements OnInit {
  trilha!: DetalheTrilha;

  constructor(private trilhaService: TrilhaService) {
    this.getDetalhesTrilha();
  }

  getDetalhesTrilha(): void {
    this.trilhaService
      .oberDetalhesTrilhas()
      .subscribe((detalhe) => (this.trilha = detalhe));
  }

  ngOnInit(): void {}
}
