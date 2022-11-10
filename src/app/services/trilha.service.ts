import { Trilha } from './../models/trilha.model';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";


@Injectable({
    providedIn: 'root'
})

export class TrilhaService extends BaseService {
    constructor(http: HttpClient, ) {
        super(http);
    }

    obterTrilhas() {
        return this._get<Trilha[]>(`https://orange-squad03.herokuapp.com/trilhas`);
    }
}