import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
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
}