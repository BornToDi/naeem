import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiStepSignupComponent } from './multi-step-signup.component';

describe('MultiStepSignupComponent', () => {
  let component: MultiStepSignupComponent;
  let fixture: ComponentFixture<MultiStepSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiStepSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiStepSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
