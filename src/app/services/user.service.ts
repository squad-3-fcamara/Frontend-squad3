import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Login } from "../models/login.model";
import { User } from "../models/user.model";
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
        return this._post<any>(`https://orange-squad03.herokuapp.com/usuario/login`, login);
    }

    
    getUser() {
        return this._get<any>(`https://orange-squad03.herokuapp.com/usuario`);
    }
}