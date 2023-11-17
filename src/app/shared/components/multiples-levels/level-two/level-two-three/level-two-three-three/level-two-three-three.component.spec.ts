import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelTwoThreeThreeComponent } from './level-two-three-three.component';

describe('LevelTwoThreeThreeComponent', () => {
  let component: LevelTwoThreeThreeComponent;
  let fixture: ComponentFixture<LevelTwoThreeThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelTwoThreeThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelTwoThreeThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
