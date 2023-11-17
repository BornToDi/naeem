import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TergetAudienceComponent } from './terget-audience.component';

describe('TergetAudienceComponent', () => {
  let component: TergetAudienceComponent;
  let fixture: ComponentFixture<TergetAudienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TergetAudienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TergetAudienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
