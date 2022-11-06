import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabLoginCadastroComponent } from './tab/tab-login-cadastro/tab-login-cadastro.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: TabLoginCadastroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
