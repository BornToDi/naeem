import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelTwoThreeComponent } from './level-two-three.component';

describe('LevelTwoThreeComponent', () => {
  let component: LevelTwoThreeComponent;
  let fixture: ComponentFixture<LevelTwoThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelTwoThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelTwoThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
