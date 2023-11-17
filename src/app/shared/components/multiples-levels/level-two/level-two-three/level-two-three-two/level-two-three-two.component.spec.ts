import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelTwoThreeTwoComponent } from './level-two-three-two.component';

describe('LevelTwoThreeTwoComponent', () => {
  let component: LevelTwoThreeTwoComponent;
  let fixture: ComponentFixture<LevelTwoThreeTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelTwoThreeTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelTwoThreeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
