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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    TabLoginCadastroComponent
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
