import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInscricaoTrilhasComponent } from './modal-inscricao-trilhas.component';

describe('ModalInscricaoTrilhasComponent', () => {
  let component: ModalInscricaoTrilhasComponent;
  let fixture: ComponentFixture<ModalInscricaoTrilhasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalInscricaoTrilhasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalInscricaoTrilhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
