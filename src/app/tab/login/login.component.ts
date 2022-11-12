import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Trilha } from 'src/app/models/trilha.model';
import { User } from 'src/app/models/user.model';
import { TrilhaService } from 'src/app/services/trilha.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    // private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    });
  }

  login(): void {
   
    const login = this.loginForm.getRawValue();
    this.userService.login(login)
      .subscribe(response => {
        this.userService.LocalStorage.salvarDadosLocaisUsuario(response);
        this.router.navigate(['/dashboard-perfil']);
      })
  }

  get formControls() {
    return this.loginForm.controls;
  }
}
