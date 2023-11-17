import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelTwoOneComponent } from './level-two-one.component';

describe('LevelTwoOneComponent', () => {
  let component: LevelTwoOneComponent;
  let fixture: ComponentFixture<LevelTwoOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelTwoOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelTwoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
