import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplesLevelsComponent } from './multiples-levels.component';

describe('MultiplesLevelsComponent', () => {
  let component: MultiplesLevelsComponent;
  let fixture: ComponentFixture<MultiplesLevelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplesLevelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplesLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
