import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDiferenciaisComponent } from './card-diferenciais.component';

describe('CardDiferenciaisComponent', () => {
  let component: CardDiferenciaisComponent;
  let fixture: ComponentFixture<CardDiferenciaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDiferenciaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDiferenciaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
