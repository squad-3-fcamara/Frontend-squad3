import { AulasComponent } from './fluxo/aulas/aulas.component';
import { DashboardPerfilComponent } from './fluxo/dashboard-perfil/dashboard-perfil.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarConteudoComponent } from './administrador/adicionar-conteudo/adicionar-conteudo.component';
import { AdicionarTrilhaComponent } from './administrador/adicionar-trilha/adicionar-trilha.component';
import { TabLoginCadastroComponent } from './tab/tab-login-cadastro/tab-login-cadastro.component';
import { DetalheTrilhaComponent } from './detalhe-trilha/detalhe-trilha.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: TabLoginCadastroComponent },
  { path: 'dashboard-perfil', component: DashboardPerfilComponent },
  { path: 'adicionar-conteudo', component: AdicionarConteudoComponent },
  { path: 'adicionar-trilha', component: AdicionarTrilhaComponent },
  { path: 'aulas/:idTrilha/:idAula', component: AulasComponent },
  { path: 'detalhe-trilha/:id', component: DetalheTrilhaComponent },
  {
    path: 'administrador',
    loadChildren: () => import('./administrador/administrador.module').then(m => m.AdministradorModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
