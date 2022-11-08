import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-adicionar-modulo',
  templateUrl: './adicionar-modulo.component.html',
  styleUrls: ['./adicionar-modulo.component.scss']
})
export class AdicionarModuloComponent implements OnInit {

  hide = true;
  formModulo!: FormGroup;
  pageable = {
    currentPage: 1,
    pageSize: 10,
    recordCount: 9,
}
modulo: any;


  constructor(private fb: FormBuilder,) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    this.formModulo = this.fb.group({
      nome: ['', [Validators.required]],
      curso: ['', [Validators.required]],
      apresentacao: ['', [Validators.required]],
    });
  }
  

  reset() {
    this.formModulo.reset();
  }

  save(): void {
  }

  get formControls() {
    return this.formModulo.controls;
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
