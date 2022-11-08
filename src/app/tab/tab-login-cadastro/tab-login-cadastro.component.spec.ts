import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabLoginCadastroComponent } from './tab-login-cadastro.component';

describe('TabLoginCadastroComponent', () => {
  let component: TabLoginCadastroComponent;
  let fixture: ComponentFixture<TabLoginCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabLoginCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabLoginCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
