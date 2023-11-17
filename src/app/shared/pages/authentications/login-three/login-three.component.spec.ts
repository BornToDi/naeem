import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginThreeComponent } from './login-three.component';

describe('LoginThreeComponent', () => {
  let component: LoginThreeComponent;
  let fixture: ComponentFixture<LoginThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
