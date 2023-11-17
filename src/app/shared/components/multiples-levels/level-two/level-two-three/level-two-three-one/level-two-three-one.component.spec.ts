import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelTwoThreeOneComponent } from './level-two-three-one.component';

describe('LevelTwoThreeOneComponent', () => {
  let component: LevelTwoThreeOneComponent;
  let fixture: ComponentFixture<LevelTwoThreeOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelTwoThreeOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelTwoThreeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
