import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsDetailsCardComponent } from './patients-details-card.component';

describe('PatientsDetailsCardComponent', () => {
  let component: PatientsDetailsCardComponent;
  let fixture: ComponentFixture<PatientsDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientsDetailsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
