import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppMaterialModule } from "../shared/material.module";
import { AdministradorRoutingModule } from "./administrador-routing.module";
import { ExibirTrilhasComponent } from "./exibir-trilhas/exibir-trilhas.component";

@NgModule({
    declarations: [
        ExibirTrilhasComponent
    ],
    imports: [
        CommonModule, 
        FormsModule,
        ReactiveFormsModule,
        AppMaterialModule,
        AdministradorRoutingModule,
    ]
})

export class AdministradorModule { }