export interface UsuarioResponse {
    usuario: Usuario
    token: string
  }
  
  export interface Usuario {
    id: number
    nome: string
    email: string
    isadmin: boolean
  }
  