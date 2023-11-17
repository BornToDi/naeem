import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDecativateComponent } from './account-decativate.component';

describe('AccountDecativateComponent', () => {
  let component: AccountDecativateComponent;
  let fixture: ComponentFixture<AccountDecativateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountDecativateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDecativateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
