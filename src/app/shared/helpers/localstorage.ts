import { Usuario, UsuarioResponse } from "src/app/models/usuario-response.model";
import { StringUtils } from "./string-utils";

export class LocalStorageUtils {

    public obterUsuario(): Usuario {
        return (JSON.parse(localStorage.getItem('squad-03.user') || '{}') || {}) as Usuario;
    }

    public salvarDadosLocaisUsuario(response: UsuarioResponse) {
        this.salvarTokenUsuario(response.token);
        this.salvarUsuario(response.usuario);
    }

    public limparDadosLocaisUsuario() {
        localStorage.removeItem('squad-03.token');
        localStorage.removeItem('squad-03.user');
    }

    public obterTokenUsuario(): string | null {
        return localStorage.getItem('squad-03.token');
    }

    public salvarTokenUsuario(token: string) {
        localStorage.setItem('squad-03.token', token);
    }

    public salvarUsuario(user: Usuario) {
        localStorage.setItem('squad-03.user', JSON.stringify(user));
    }

}