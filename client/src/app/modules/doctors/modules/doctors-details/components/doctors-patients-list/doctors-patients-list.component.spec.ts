import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsPatientsListComponent } from './doctors-patients-list.component';

describe('DoctorsPatientsListComponent', () => {
  let component: DoctorsPatientsListComponent;
  let fixture: ComponentFixture<DoctorsPatientsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorsPatientsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsPatientsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
