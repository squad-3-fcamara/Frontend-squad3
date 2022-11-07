import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarModuloComponent } from './adicionar-modulo.component';

describe('AdicionarModuloComponent', () => {
  let component: AdicionarModuloComponent;
  let fixture: ComponentFixture<AdicionarModuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarModuloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarModuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
