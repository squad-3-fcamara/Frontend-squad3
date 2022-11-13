import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTrilhaComponent } from './card-trilha.component';

describe('CardTrilhaComponent', () => {
  let component: CardTrilhaComponent;
  let fixture: ComponentFixture<CardTrilhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTrilhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTrilhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
