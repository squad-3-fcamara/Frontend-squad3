import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-adicionar-curso',
  templateUrl: './adicionar-curso.component.html',
  styleUrls: ['./adicionar-curso.component.scss']
})
export class AdicionarCursoComponent implements OnInit {

  hide = true;
  formCurso!: FormGroup;
  pageable = {
    currentPage: 1,
    pageSize: 10,
    recordCount: 9,
}
curso: any;


  constructor(private fb: FormBuilder,) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    this.formCurso = this.fb.group({
      nome: ['', [Validators.required]],
      arquivo: ['', [Validators.required]],
      link: ['', [Validators.required]],
    });
  }
  

  reset() {
    this.formCurso.reset();
  }

  save(): void {
  }

  get formControls() {
    return this.formCurso.controls;
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
