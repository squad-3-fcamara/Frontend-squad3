import { Component, OnInit } from '@angular/core';
import { MenuItemBaseComponent } from 'src/app/menu-base/menu-item-base.component';
import { Menu } from 'src/app/models/menu.model';

@Component({
  selector: 'app-tab-login-cadastro',
  templateUrl: './tab-login-cadastro.component.html',
  styleUrls: ['./tab-login-cadastro.component.scss']
})
export class TabLoginCadastroComponent extends MenuItemBaseComponent implements OnInit {

  menu: Menu[] = [];
  constructor() { super() }

  ngOnInit(): void {
    this.criarMenu();
  }

  criarMenu(): void {
    this.menu.push(this.itemHome);
    this.menu.push(this.itemSuasTrilhas);
    this.menu.push(this.itemFAQ);
    this.menu.push(this.itemDiferenciais);
    this.menu.push(this.itemBotaoCadastro);
  }

}
