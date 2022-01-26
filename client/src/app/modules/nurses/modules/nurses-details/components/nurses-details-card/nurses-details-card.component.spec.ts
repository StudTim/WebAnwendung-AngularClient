import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NursesDetailsCardComponent } from './nurses-details-card.component';

describe('NursesDetailsCardComponent', () => {
  let component: NursesDetailsCardComponent;
  let fixture: ComponentFixture<NursesDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NursesDetailsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NursesDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
