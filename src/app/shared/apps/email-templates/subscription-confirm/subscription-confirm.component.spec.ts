import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionConfirmComponent } from './subscription-confirm.component';

describe('SubscriptionConfirmComponent', () => {
  let component: SubscriptionConfirmComponent;
  let fixture: ComponentFixture<SubscriptionConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
