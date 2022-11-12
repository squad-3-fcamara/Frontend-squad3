import { Trilha } from './trilha.model';
import { Usuario } from "./usuario-response.model"

export interface Inscricoes {
    usuario: Usuario
    trilhas: Trilha[]
  }