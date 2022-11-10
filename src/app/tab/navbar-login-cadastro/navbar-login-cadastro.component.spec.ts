import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLoginCadastroComponent } from './navbar-login-cadastro.component';

describe('NavbarLoginCadastroComponent', () => {
  let component: NavbarLoginCadastroComponent;
  let fixture: ComponentFixture<NavbarLoginCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarLoginCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarLoginCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
