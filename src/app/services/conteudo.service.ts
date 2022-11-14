import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Aula } from "../models/aula.model";
import { BaseService } from "./base.service";
import { SnackBarService } from "./snack-bar.service";

@Injectable({
    providedIn: 'root',
  })
export class ConteudoService extends BaseService {
    constructor(http: HttpClient, snackBarService: SnackBarService) {
        super(http, snackBarService);
    }

    obterConteudos(id: number) {
        const httpOptions = this.obterAuthHeaderJson();
        return this._get<Aula>(`https://orange-squad03.herokuapp.com/conteudo/${id}`, httpOptions);
    }
}