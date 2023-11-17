import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorSixComponent } from './error-six.component';

describe('ErrorSixComponent', () => {
  let component: ErrorSixComponent;
  let fixture: ComponentFixture<ErrorSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorSixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
