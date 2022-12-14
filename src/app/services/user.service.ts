import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AdicionarTrilhasRequest } from "../models/adicionar-trilhas.model";
import { Inscricoes } from "../models/inscricoes.model";
import { Login } from "../models/login.model";
import { User } from "../models/user.model";
import { UsuarioResponse } from "../models/usuario-response.model";
import { BaseService } from "./base.service";
import { SnackBarService } from "./snack-bar.service";


@Injectable({
    providedIn: 'root'
})

export class UserService extends BaseService {
    constructor(http: HttpClient, snackBarService: SnackBarService,) {
        super(http, snackBarService);
    }

    cadastrarUsuario(usuario: User) {
        return this._post<any>(`https://orange-squad03.herokuapp.com/usuario/cadastro`, usuario);
    }

    login(login: Login) {
        return this._post<UsuarioResponse>(`https://orange-squad03.herokuapp.com/usuario/login`, login);
    }

    
    getInscricoesUser() {
        const httpOptions = this.obterAuthHeaderJson();
        return this._get<Inscricoes>(`https://orange-squad03.herokuapp.com/usuario`, httpOptions);
    }

    adicionarTrilhasUsuario(trilhas: AdicionarTrilhasRequest) {
        const httpOptions = this.obterAuthHeaderJson();
        return this._patch<any>(`https://orange-squad03.herokuapp.com/usuario/trilhas`, trilhas, httpOptions);
    }

    private cadastrarExemploComHeaders(entity: any) {
        let params = new HttpParams();
        const httpOptions = {
            headers: this.obterAuthHeaderJson(), 
            body: entity,
            params: params
        };

        return this._post<Inscricoes>(`https://orange-squad03.herokuapp.com/usuario`, httpOptions);
    }
}