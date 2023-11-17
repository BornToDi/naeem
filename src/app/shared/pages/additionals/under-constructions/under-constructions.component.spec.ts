import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderConstructionsComponent } from './under-constructions.component';

describe('UnderConstructionsComponent', () => {
  let component: UnderConstructionsComponent;
  let fixture: ComponentFixture<UnderConstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderConstructionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderConstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
