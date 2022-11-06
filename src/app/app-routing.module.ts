
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaPrincipalComponent } from './administrador/tela-principal/tela-principal.component';
import { TabLoginCadastroComponent } from './tab/tab-login-cadastro/tab-login-cadastro.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: TabLoginCadastroComponent },
  {path: 'administrador', component: TelaPrincipalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
