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
import { ConteudosDaAula } from '../models/aula-detalhes.model';
import { ModalConfirmComponent } from '../shared/components/dialogs/modal-confirm/modal-confirm.component';

export interface DialogData {
    message: string;
    title?: string | undefined;
    callback?: () => void
}

export interface ConfirmDialogData {
    messages: string[];
    message: string ;
    title?: string | undefined;
    buttonConfirm?: string | undefined;
    callback?: () => void
}

@Injectable()
export class DialogService {

    constructor(public dialog: MatDialog) { }

    openSelecionarTrilhas(props: Trilha[], callback: any): void {
        const dialogRef = this.dialog.open(ModalInscricaoTrilhasComponent, {
            // width: '353px',
            data: props
        });

        dialogRef.afterClosed().subscribe((isExclusion: boolean) => {
            if (callback)
                callback.result(isExclusion);
        });
    }

    openAula(props: DialogData, callback: any): void {
        const dialogRef = this.dialog.open(AdicionarConteudoComponent, {
            width: '353px',
            data: props
        });

        dialogRef.afterClosed().subscribe(() => {
            if (props.callback)
                props.callback();
        });
    }

    openCadastrarConteudo(detalhes: any, idAula: number, callback: any): void {
        const dialogRef = this.dialog.open(ModalIncluirConteudoComponent, {
            width: '500px',
            data: {
                detalhes: detalhes,
                idAula: idAula
            }
        });

        dialogRef.afterClosed().subscribe((isExclusion: boolean) => {
            if (callback)
                callback.result(isExclusion);
        });
    }

    openEdicaoConteudo(conteudo: ConteudosDaAula, idAula: number, idModulo: number, callback: any): void {
        const dialogRef = this.dialog.open(ModalEditarConteudoComponent, {
            width: '500px',
            data: {
                conteudo: conteudo,
                idModulo: idModulo,
                idAula: idAula
            } 
        });

        dialogRef.afterClosed().subscribe((isExclusion: boolean) => {
            if (callback)
                callback.result(isExclusion);
        });

    }

    excluirConteudo(conteudo: ConteudosDaAula, callback: any): void {
        const dialogRef = this.dialog.open(ModalExcluirConteudoComponent, {
            data: conteudo
        });
        
        dialogRef.afterClosed().subscribe((isExclusion: boolean) => {
            if (callback)
                callback.result(isExclusion);
        });
    }

    openConfirmationDialog(props: ConteudosDaAula, callback: any): void {
        const dialogRef = this.dialog.open(ModalConfirmComponent, {
            width: '353px',
            data: props
        });

        dialogRef.afterClosed().subscribe((isExclusion: boolean) => {
            if (callback)
                callback.result(isExclusion);
        });
    }
}