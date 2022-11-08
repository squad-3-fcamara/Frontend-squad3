import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarConteudoComponent } from './administrador/adicionar-conteudo/adicionar-conteudo.component';
import { AdicionarTrilhaComponent } from './administrador/adicionar-trilha/adicionar-trilha.component';
import { TabLoginCadastroComponent } from './tab/tab-login-cadastro/tab-login-cadastro.component';
// import { AdicionarModuloComponent } from './administrador/adicionar-modulo/adicionar-modulo.component';
// import { AdicionarCursoComponent } from './administrador/adicionar-curso/adicionar-curso.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: TabLoginCadastroComponent },
  {path: 'adicionar-conteudo', component: AdicionarConteudoComponent},
  {path: 'adicionar-trilha', component: AdicionarTrilhaComponent},
  // {path:'adicionar-curso', component: AdicionarCursoComponent},
  // {path:'adicionar-modulo', component:AdicionarModuloComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
