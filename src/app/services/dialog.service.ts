import { AdicionarConteudoComponent } from './../administrador/adicionar-conteudo/adicionar-conteudo.component';
import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ModalInscricaoTrilhasComponent } from "../shared/components/dialogs/modal-inscricao-trilhas/modal-inscricao-trilhas.component";
import { Trilha } from '../models/trilha.model';

export interface DialogData {
    message: string ;
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
}