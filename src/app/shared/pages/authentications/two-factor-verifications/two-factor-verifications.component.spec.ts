import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoFactorVerificationsComponent } from './two-factor-verifications.component';

describe('TwoFactorVerificationsComponent', () => {
  let component: TwoFactorVerificationsComponent;
  let fixture: ComponentFixture<TwoFactorVerificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoFactorVerificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoFactorVerificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
