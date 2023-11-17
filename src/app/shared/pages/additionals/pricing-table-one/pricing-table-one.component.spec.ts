import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingTableOneComponent } from './pricing-table-one.component';

describe('PricingTableOneComponent', () => {
  let component: PricingTableOneComponent;
  let fixture: ComponentFixture<PricingTableOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingTableOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingTableOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
