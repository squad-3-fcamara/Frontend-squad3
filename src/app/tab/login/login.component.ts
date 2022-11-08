import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private userService: UserService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    });
  }

  login(): void {
    let trilha: any[] = [];
    trilha.push("fullstack");

    const usuario: User = {
      nome: "Lucy",
      email: "teste@gmail.com",
      senha: "Teste@1234",
      trilhas: trilha
    };
    this.userService.cadastrarUsuario(usuario)
      .subscribe(x => {
        console.log(x);
      })
  }

  get formControls() {
    return this.loginForm.controls;
  }
}
