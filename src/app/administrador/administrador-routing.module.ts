import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ExibirTrilhasComponent } from "./exibir-trilhas/exibir-trilhas.component";

const routes: Routes = [
    { path: '', redirectTo: '/exibir-trilha', pathMatch: 'full' },
    {
      path: 'exibir-trilha',
      component: ExibirTrilhasComponent
    }
   
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdministradorRoutingModule { }