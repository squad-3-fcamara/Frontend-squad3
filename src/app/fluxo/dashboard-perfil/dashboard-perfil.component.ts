import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { TrilhaService } from 'src/app/services/trilha.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-perfil',
  templateUrl: './dashboard-perfil.component.html',
  styleUrls: ['./dashboard-perfil.component.scss']
})
export class DashboardPerfilComponent implements OnInit {

  user!: User;
  constructor(
    private trilhaService: TrilhaService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(response => [
      console.log(response)
    ])

  }
  //BUSCAR ENDPOINT DE TRILHAS NO README;
  // PEGAR NOME DO USUARIO E PASSAR P/ HTML
  abrirModal(): void {}
}
