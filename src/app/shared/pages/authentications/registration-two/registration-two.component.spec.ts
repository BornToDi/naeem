import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationTwoComponent } from './registration-two.component';

describe('RegistrationTwoComponent', () => {
  let component: RegistrationTwoComponent;
  let fixture: ComponentFixture<RegistrationTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
