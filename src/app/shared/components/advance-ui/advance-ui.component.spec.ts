import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceUIComponent } from './advance-ui.component';

describe('AdvanceUIComponent', () => {
  let component: AdvanceUIComponent;
  let fixture: ComponentFixture<AdvanceUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvanceUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
