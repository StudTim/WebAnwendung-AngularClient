import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsHistoryFormPopupComponent } from './patients-history-form-popup.component';

describe('PatientsHistoryFormPopupComponent', () => {
  let component: PatientsHistoryFormPopupComponent;
  let fixture: ComponentFixture<PatientsHistoryFormPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientsHistoryFormPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsHistoryFormPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
