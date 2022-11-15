import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalIncluirConteudoComponent } from './modal-incluir-conteudo.component';

describe('ModalIncluirConteudoComponent', () => {
  let component: ModalIncluirConteudoComponent;
  let fixture: ComponentFixture<ModalIncluirConteudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalIncluirConteudoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalIncluirConteudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
