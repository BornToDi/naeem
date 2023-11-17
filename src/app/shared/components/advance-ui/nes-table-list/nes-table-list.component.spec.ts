import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NesTableListComponent } from './nes-table-list.component';

describe('NesTableListComponent', () => {
  let component: NesTableListComponent;
  let fixture: ComponentFixture<NesTableListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NesTableListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NesTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
