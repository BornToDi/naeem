import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComingSoonThreeComponent } from './coming-soon-three.component';

describe('ComingSoonThreeComponent', () => {
  let component: ComingSoonThreeComponent;
  let fixture: ComponentFixture<ComingSoonThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComingSoonThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComingSoonThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
