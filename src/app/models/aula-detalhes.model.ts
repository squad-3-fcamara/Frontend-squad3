export interface AulaDetalhes {
    nomeTrilha: NomeTrilha
    nomeAula: NomeAula
    conteudosDaAula: ConteudosDaAula[]
  }
  
  export interface NomeTrilha {
    nome: string
  }
  
  export interface NomeAula {
    nome: string
  }
  
  export interface ConteudosDaAula {
    id: number
    ordem: number
    nome?: string
    tipo: string
    autor: string
    descricao: string
    link: string
  }
  