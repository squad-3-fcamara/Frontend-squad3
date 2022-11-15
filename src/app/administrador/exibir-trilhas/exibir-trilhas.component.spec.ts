import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirTrilhasComponent } from './exibir-trilhas.component';

describe('ExibirTrilhasComponent', () => {
  let component: ExibirTrilhasComponent;
  let fixture: ComponentFixture<ExibirTrilhasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExibirTrilhasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExibirTrilhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
