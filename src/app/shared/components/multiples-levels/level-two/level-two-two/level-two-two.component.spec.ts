import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelTwoTwoComponent } from './level-two-two.component';

describe('LevelTwoTwoComponent', () => {
  let component: LevelTwoTwoComponent;
  let fixture: ComponentFixture<LevelTwoTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelTwoTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelTwoTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
