import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorFourComponent } from './error-four.component';

describe('ErrorFourComponent', () => {
  let component: ErrorFourComponent;
  let fixture: ComponentFixture<ErrorFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
