import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsFormPopupComponent } from './patients-form-popup.component';

describe('PatientsFormPopupComponent', () => {
  let component: PatientsFormPopupComponent;
  let fixture: ComponentFixture<PatientsFormPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientsFormPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsFormPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
