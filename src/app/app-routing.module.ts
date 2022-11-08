import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarCursoComponent } from './administrador/adicionar-curso/adicionar-curso.component';
import { AdicionarConteudoComponent } from './administrador/adicionar-conteudo/adicionar-conteudo.component';
import { AdicionarTrilhaComponent } from './administrador/adicionar-trilha/adicionar-trilha.component';
import { TelaPrincipalComponent } from './administrador/tela-principal/tela-principal.component';
import { TabLoginCadastroComponent } from './tab/tab-login-cadastro/tab-login-cadastro.component';
import { AdicionarModuloComponent } from './administrador/adicionar-modulo/adicionar-modulo.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: TabLoginCadastroComponent },
  // {path: 'administrador', component: TelaPrincipalComponent},
  {path: 'adicionar-conteudo', component: AdicionarConteudoComponent},
  {path: 'adicionar-trilha', component: AdicionarTrilhaComponent},
  {path:'adicionar-curso', component: AdicionarCursoComponent},
  {path:'adicionar-modulo', component:AdicionarModuloComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
