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
import { TelaPrincipalComponent } from './administrador/tela-principal/tela-principal.component';
import { AdicionarTrilhaComponent } from './administrador/adicionar-trilha/adicionar-trilha.component';
import { AdicionarConteudoComponent } from './administrador/adicionar-conteudo/adicionar-conteudo.component';
import { AdicionarCursoComponent } from './administrador/adicionar-curso/adicionar-curso.component';
import { AdicionarModuloComponent } from './administrador/adicionar-modulo/adicionar-modulo.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { FooterComponent } from './home/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    TabLoginCadastroComponent,
    TelaPrincipalComponent,
    AdicionarTrilhaComponent,
    AdicionarConteudoComponent,
    AdicionarCursoComponent,
    AdicionarModuloComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
