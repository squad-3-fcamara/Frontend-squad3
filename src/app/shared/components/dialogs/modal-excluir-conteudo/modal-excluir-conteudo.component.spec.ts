import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExcluirConteudoComponent } from './modal-excluir-conteudo.component';

describe('ModalExcluirConteudoComponent', () => {
  let component: ModalExcluirConteudoComponent;
  let fixture: ComponentFixture<ModalExcluirConteudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalExcluirConteudoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalExcluirConteudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
