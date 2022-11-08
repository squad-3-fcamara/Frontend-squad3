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
  trilha: any[] = [];

  constructor(private fb: FormBuilder,) { }

  ngOnInit() {
    this.createForm();
    this.iniciarTrilhaFake();
  }

  iniciarTrilhaFake() {
    let cursos: any[] = [];
    cursos.push({nome: 'Curso 1'});
    cursos.push({nome: 'Curso 2'});
    cursos.push({nome: 'Curso 3'});

    this.trilha.push({ expanded: false, nome: 'teste', apresentacao: 'teste de apresentação', cursos });
    this.trilha.push({ expanded: false, nome: 'teste 1', apresentacao: 'teste de apresentação 1', cursos: [] });
    this.trilha.push({ expanded: false, nome: 'teste 2', apresentacao: 'teste de apresentação 2', cursos: [] });
    this.trilha.push({ expanded: false, nome: 'teste 3', apresentacao: 'teste de apresentação 3', cursos: [] });
    this.trilha.push({ expanded: false, nome: 'teste 4', apresentacao: 'teste de apresentação 4', cursos: [] });
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

  edit(): void { }

  delete(): void { }

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

  getDetailsClass(index: number, item: any): string {
    let css = '';
    if (index % 2 === 0)
      css = 'odd';
    else
      css = 'even';

    if (item.expanded)
      css += ' details-expanded';

    return css;
  }
}