import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Inscricoes } from "../models/inscricoes.model";
import { Login } from "../models/login.model";
import { User } from "../models/user.model";
import { UsuarioResponse } from "../models/usuario-response.model";
import { BaseService } from "./base.service";


@Injectable({
    providedIn: 'root'
})

export class UserService extends BaseService {
    constructor(http: HttpClient, ) {
        super(http);
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
}