import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorSevenComponent } from './error-seven.component';

describe('ErrorSevenComponent', () => {
  let component: ErrorSevenComponent;
  let fixture: ComponentFixture<ErrorSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorSevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
