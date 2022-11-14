import { Trilha } from './../models/trilha.model';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { SnackBarService } from './snack-bar.service';
import { DetalheTrilha } from '../models/detalheTrilha.model';

@Injectable({
  providedIn: 'root',
})
export class TrilhaService extends BaseService {
  constructor(http: HttpClient, snackBarService: SnackBarService) {
    super(http, snackBarService);
  }

  obterTrilhas() {
    return this._get<Trilha[]>(`https://orange-squad03.herokuapp.com/trilhas`);
  }

  oberDetalhesTrilhas(id: number) {

    const httpOptions = this.obterAuthHeaderJson();
    return this._get<DetalheTrilha>(`https://orange-squad03.herokuapp.com/trilhas/${id}`, httpOptions);
  }
}