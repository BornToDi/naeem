import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorFiveComponent } from './error-five.component';

describe('ErrorFiveComponent', () => {
  let component: ErrorFiveComponent;
  let fixture: ComponentFixture<ErrorFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
