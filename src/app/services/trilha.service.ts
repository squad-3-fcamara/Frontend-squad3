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

  oberDetalhesTrilhas() {
    return this._get<DetalheTrilha>(
      'https://orange-squad03.herokuapp.com/trilhas/2',
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNjY4MzQ3NzI5LCJleHAiOjE2NjgzNzY1Mjl9.t_IQqxfPkBiuIse8Eu-JIDACrfLaIbl6P3F9McDgQmI`,
        }),
      }
    );
  }
}
