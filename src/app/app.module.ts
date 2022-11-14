import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from './shared/material.module';
import { LoginComponent } from './tab/login/login.component';
import { CadastroComponent } from './tab/cadastro/cadastro.component';
import { TabLoginCadastroComponent } from './tab/tab-login-cadastro/tab-login-cadastro.component';
import { AdicionarTrilhaComponent } from './administrador/adicionar-trilha/adicionar-trilha.component';
import { AdicionarConteudoComponent } from './administrador/adicionar-conteudo/adicionar-conteudo.component';
import { AdicionarCursoComponent } from './administrador/adicionar-curso/adicionar-curso.component';
import { AdicionarModuloComponent } from './administrador/adicionar-modulo/adicionar-modulo.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarLoginCadastroComponent } from './tab/navbar-login-cadastro/navbar-login-cadastro.component';
import { DashboardPerfilComponent } from './fluxo/dashboard-perfil/dashboard-perfil.component';
import { DialogService } from './services/dialog.service';
import { AulasComponent } from './fluxo/aulas/aulas.component';
import { DetalheTrilhaComponent } from './detalhe-trilha/detalhe-trilha.component';
import { LidoPipe } from './shared/pipes/conteudo.pipe';
import { SafePipe } from './shared/pipes/safe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    TabLoginCadastroComponent,
    AdicionarTrilhaComponent,
    AdicionarConteudoComponent,
    AdicionarCursoComponent,
    AdicionarModuloComponent,
    MenuComponent,
    NavbarLoginCadastroComponent,
    DashboardPerfilComponent,
    AulasComponent,
    DetalheTrilhaComponent,
    LidoPipe,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    HttpClientModule,
  ],
  providers: [DialogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
