import { Menu } from "../models/menu.model";

export class MenuItemBaseComponent {
    itemHome: Menu = {
        nome: 'Home',
        link: '',
        rota: '/home'
    };

    itemOrange: Menu = {
        nome: 'Orange Juice',
        link: 'https://digital.fcamara.com.br/orange-evolution',
        rota: ''
    };

    itemFaleConosco: Menu = {
        nome: 'Fale conosco',
        link: 'https://digital.fcamara.com.br/orange-evolution',
        rota: ''
    };

    itemSuasTrilhas: Menu = {
        nome: 'Suas trilhas',
        link: '',
        rota: '/dashboard-perfil'
    };

    itemLogin: Menu = {
        nome: 'Login',
        link: '',
        rota: '/login'
    };

    itemFAQ: Menu = {
        nome: 'FAQ',
        link: '',
        rota: '/home'
    };

    itemDiferenciais: Menu = {
        nome: 'Diferenciais',
        link: '',
        rota: '/home'
    };

    itemMinhasTrilhas: Menu = {
        nome: 'Minhas trilhas',
        link: '',
        rota: '/dashboard-perfil'
    };

    itemSair: Menu = {
        nome: 'Sair',
        link: '',
        rota: '/login'
    };

    itemSininho: Menu = {
        nome: 'Sininho',
        link: '',
        rota: ''
    };

    itemBotaoCadastro: Menu = {
        nome: 'Entrar/Cadastrar',
        link: '',
        rota: '/login'
    };

    // ADM

    itemTrilhasAdm: Menu = {
        nome: 'Trilhas',
        link: '',
        rota: '/administrador/exibir-trilha'
    };
}