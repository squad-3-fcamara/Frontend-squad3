import { Trilha } from './trilha.model';
export interface DetalheTrilha {
  trilha: Trilha
  modulos: Modulo[];
}

interface Modulo {
  id: number;
  ordem: number;
  nome: string;
  aulas: Aula[];
}

interface Aula {
  id: number;
  ordem: number;
  nome: string;
}
