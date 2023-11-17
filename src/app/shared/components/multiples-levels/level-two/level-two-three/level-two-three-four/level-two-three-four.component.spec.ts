import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelTwoThreeFourComponent } from './level-two-three-four.component';

describe('LevelTwoThreeFourComponent', () => {
  let component: LevelTwoThreeFourComponent;
  let fixture: ComponentFixture<LevelTwoThreeFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelTwoThreeFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelTwoThreeFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
