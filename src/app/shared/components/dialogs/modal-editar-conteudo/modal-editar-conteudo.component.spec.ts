import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarConteudoComponent } from './modal-editar-conteudo.component';

describe('ModalEditarConteudoComponent', () => {
  let component: ModalEditarConteudoComponent;
  let fixture: ComponentFixture<ModalEditarConteudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditarConteudoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditarConteudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
