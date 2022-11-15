import { Component, OnInit } from '@angular/core';
import { MenuItemBaseComponent } from 'src/app/menu-base/menu-item-base.component';
import { Menu } from 'src/app/models/menu.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-tab-login-cadastro',
  templateUrl: './tab-login-cadastro.component.html',
  styleUrls: ['./tab-login-cadastro.component.scss']
})
export class TabLoginCadastroComponent extends MenuItemBaseComponent implements OnInit {

  menu: Menu[] = [];
  constructor(private userService: UserService) { super() }

  ngOnInit(): void {
    this.criarMenu();
    this.userService.LocalStorage.limparDadosLocaisUsuario();

  }

  criarMenu(): void {
    this.menu.push(this.itemHome);
    this.menu.push(this.itemTrilhas);
    this.menu.push(this.itemFAQ);
    this.menu.push(this.itemDiferenciais);
    this.menu.push(this.itemBotaoCadastro);
  }

}
