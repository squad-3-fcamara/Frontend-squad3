import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ModalInscricaoTrilhasComponent } from "../shared/components/dialogs/modal-inscricao-trilhas/modal-inscricao-trilhas.component";

export interface DialogData {
    message: string ;
    title?: string | undefined;
    callback?: () => void
}

@Injectable()
export class DialogService {

    constructor(public dialog: MatDialog) { }

    openSelecionarTrilhas(props: DialogData): void {
        const dialogRef = this.dialog.open(ModalInscricaoTrilhasComponent, {
            width: '353px',
            data: props
        });

        dialogRef.afterClosed().subscribe(() => {
            if (props.callback)
                props.callback();
        });
    }
}