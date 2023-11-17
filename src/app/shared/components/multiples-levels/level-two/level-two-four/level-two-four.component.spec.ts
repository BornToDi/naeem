import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelTwoFourComponent } from './level-two-four.component';

describe('LevelTwoFourComponent', () => {
  let component: LevelTwoFourComponent;
  let fixture: ComponentFixture<LevelTwoFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelTwoFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelTwoFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
