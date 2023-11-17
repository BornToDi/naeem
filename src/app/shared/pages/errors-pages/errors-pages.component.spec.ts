import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsPagesComponent } from './errors-pages.component';

describe('ErrorsPagesComponent', () => {
  let component: ErrorsPagesComponent;
  let fixture: ComponentFixture<ErrorsPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorsPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
