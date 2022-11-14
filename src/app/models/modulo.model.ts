import { Aula } from "./aula.model";

export interface Modulo {
    id: number;
    ordem: number;
    nome: string;
    aulas: Aula[];
  }
  