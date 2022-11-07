import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adicionar-trilha',
  templateUrl: './adicionar-trilha.component.html',
  styleUrls: ['./adicionar-trilha.component.scss']
})
export class AdicionarTrilhaComponent implements OnInit {

  hide = true;
  formTrilha!: FormGroup;
  pageable = {
    currentPage: 1,
    pageSize: 10,
    recordCount: 9,
}
trilha: any;

constructor(private fb: FormBuilder,) { }

ngOnInit() {
  this.createForm();
}

createForm(): void {
  this.formTrilha = this.fb.group({
    nome: ['', [Validators.required]],
    apresentacao: ['', [Validators.required]],
  });
}


reset() {
  this.formTrilha.reset();
}

save(): void {
}



get formControls() {
  return this.formTrilha.controls;
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