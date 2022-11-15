import { Menu } from "../models/menu.model";

export class MenuItemBaseComponent {
    itemHome: Menu = {
        nome: 'Home',
        link: '',
        rota: '/home',
        botao: false
    };

    itemOrange: Menu = {
        nome: 'Orange Juice',
        link: 'https://digital.fcamara.com.br/orange-evolution',
        rota: '',
        botao: false
    };

    itemFaleConosco: Menu = {
        nome: 'Fale conosco',
        link: 'https://digital.fcamara.com.br/orange-evolution',
        rota: '',
        botao: false
    };

    itemSuasTrilhas: Menu = {
        nome: 'Suas trilhas',
        link: '',
        rota: '/dashboard-perfil',
        botao: false
    };

    itemTrilhas: Menu = {
        nome: 'trilhas',
        link: '',
        rota: '/dashboard-perfil',
        botao: false
    };

    itemLogin: Menu = {
        nome: 'Login',
        link: '',
        rota: '/login',
        botao: false
    };

    itemFAQ: Menu = {
        nome: 'FAQ',
        link: '',
        rota: '/home',
        botao: false
    };

    itemDiferenciais: Menu = {
        nome: 'Diferenciais',
        link: '',
        rota: '/home',
        botao: false
    };

    itemMinhasTrilhas: Menu = {
        nome: 'Minhas trilhas',
        link: '',
        rota: '/dashboard-perfil',
        botao: false
    };

    itemSair: Menu = {
        nome: 'Sair',
        link: '',
        rota: '/login',
        botao: false
    };

    itemSininho: Menu = {
        nome: 'Sininho',
        link: 'Sininho',
        rota: '',
        botao: true
    };

    itemBotaoCadastro: Menu = {
        nome: 'Entrar/Cadastrar',
        link: 'Entrar/Cadastrar',
        rota: '/login',
        botao: true
    };

    // ADM

    itemTrilhasAdm: Menu = {
        nome: 'Trilhas',
        link: '',
        rota: '/administrador/exibir-trilha',
        botao: false
    };
}