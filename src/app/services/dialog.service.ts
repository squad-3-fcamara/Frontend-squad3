import { AdicionarConteudoComponent } from './../administrador/adicionar-conteudo/adicionar-conteudo.component';
import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ModalInscricaoTrilhasComponent } from "../shared/components/dialogs/modal-inscricao-trilhas/modal-inscricao-trilhas.component";
import { Trilha } from '../models/trilha.model';
import { ModalExcluirConteudoComponent } from '../shared/components/dialogs/modal-excluir-conteudo/modal-excluir-conteudo.component';
import { Modulo } from '../models/modulo.model';
import { ModalEditarConteudoComponent } from '../shared/components/dialogs/modal-editar-conteudo/modal-editar-conteudo.component';
import { ModalIncluirConteudoComponent } from '../shared/components/dialogs/modal-incluir-conteudo/modal-incluir-conteudo.component';
import { DetalheTrilha } from '../models/detalheTrilha.model';

export interface DialogData {
    message: string;
    title?: string | undefined;
    callback?: () => void
}

@Injectable()
export class DialogService {

    constructor(public dialog: MatDialog) { }

    openSelecionarTrilhas(trilhasUsuario: Trilha[]): boolean {
        let fechou = false;
        const dialogRef = this.dialog.open(ModalInscricaoTrilhasComponent, {
            // width: '353px',
            data: trilhasUsuario
        });

        dialogRef.afterClosed().subscribe((trilhas: any) => {
            fechou;
        });

        return fechou;
    }

    openAula(props: DialogData): void {
        const dialogRef = this.dialog.open(AdicionarConteudoComponent, {
            width: '353px',
            data: props
        });

        dialogRef.afterClosed().subscribe(() => {
            if (props.callback)
                props.callback();
        });
    }

    openCadastrarConteudo(detalhes: DetalheTrilha, idAula: number): void {
        const dialogRef = this.dialog.open(ModalIncluirConteudoComponent, {
            width: '500px',
            data: {
                detalhes: detalhes,
                idAula: idAula
            }
             
        });

    }

    openEdicaoConteudo(conteudo: Modulo, idAula: number): void {
        const dialogRef = this.dialog.open(ModalEditarConteudoComponent, {
            width: '500px',
            data: {
                conteudo: conteudo,
                idAula: idAula
            } 
        });

    }

    excluirConteudo(conteudo: Modulo): void {
        const dialogRef = this.dialog.open(ModalExcluirConteudoComponent, {
            data: conteudo
        });
    }
}