import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tela-principal',
  templateUrl: './tela-principal.component.html',
  styleUrls: ['./tela-principal.component.scss']
})
export class TelaPrincipalComponent implements OnInit {
  hide = true;
  formConteudo!: FormGroup;
  pageable = {
    currentPage: 1,
    pageSize: 10,
    recordCount: 9,
}
admin: any;


  constructor(private fb: FormBuilder,) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    this.formConteudo = this.fb.group({
      nome: ['', [Validators.required]],
      criador: ['', [Validators.required]],
      arquivo: ['', [Validators.required]],
      link: ['', [Validators.required]],
      trilha: ['', [Validators.required]],
    });
  }
  

  reset() {
    this.formConteudo.reset();
  }

  save(): void {
  }

 
  
  get formControls() {
    return this.formConteudo.controls;
  }
  edit():void {}

  delete():void {}
  
  onPageChange(event: any) {
    this.pageable.currentPage = event.pageIndex + 1;
    this.pageable.pageSize = event.pageSize;
    this.search();
  }
  search(): void {
    const filter = {
      page: this.pageable.currentPage,
      pageSize: this.pageable.pageSize
    }
}
}