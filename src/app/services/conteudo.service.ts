import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Aula } from "../models/aula.model";
import { ConteudoRequest } from "../models/conteudo-request.model";
import { Modulo } from "../models/modulo.model";
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

    excluirConteudos(id: number) {
        const httpOptions = this.obterAuthHeaderJson();
        return this._delete<Aula>(`https://orange-squad03.herokuapp.com/conteudos/${id}`, httpOptions);
    }

    editarConteudos(conteudo: ConteudoRequest, idConteudo: number) {
        const httpOptions = this.obterAuthHeaderJson();
        return this._patch<Aula>(`https://orange-squad03.herokuapp.com/conteudo/${idConteudo}`, conteudo, httpOptions);
    }

    cadastrarConteudos(conteudo: ConteudoRequest) {
        const httpOptions = this.obterAuthHeaderJson();
        return this._post<Aula>(`https://orange-squad03.herokuapp.com/conteudos`, conteudo, httpOptions);
    }
}