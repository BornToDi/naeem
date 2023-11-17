import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDecliendComponent } from './card-decliend.component';

describe('CardDecliendComponent', () => {
  let component: CardDecliendComponent;
  let fixture: ComponentFixture<CardDecliendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDecliendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDecliendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
