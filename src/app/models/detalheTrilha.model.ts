export interface DetalheTrilha {
  trilha: {
    id: number;
    nome: string;
  };
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
