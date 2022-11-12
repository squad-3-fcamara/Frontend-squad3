import { Trilha } from './../models/trilha.model';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { SnackBarService } from './snack-bar.service';


@Injectable({
    providedIn: 'root'
})

export class TrilhaService extends BaseService {
    constructor(http: HttpClient, snackBarService: SnackBarService) {
        super(http, snackBarService);
    }

    obterTrilhas() {
        return this._get<Trilha[]>(`https://orange-squad03.herokuapp.com/trilhas`);
    }
}