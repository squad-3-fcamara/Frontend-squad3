import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheTrilhaComponent } from './detalhe-trilha.component';

describe('DetalheTrilhaComponent', () => {
  let component: DetalheTrilhaComponent;
  let fixture: ComponentFixture<DetalheTrilhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheTrilhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalheTrilhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
