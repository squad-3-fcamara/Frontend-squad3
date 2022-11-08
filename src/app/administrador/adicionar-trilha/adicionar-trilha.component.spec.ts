import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarTrilhaComponent } from './adicionar-trilha.component';

describe('AdicionarTrilhaComponent', () => {
  let component: AdicionarTrilhaComponent;
  let fixture: ComponentFixture<AdicionarTrilhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarTrilhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarTrilhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
