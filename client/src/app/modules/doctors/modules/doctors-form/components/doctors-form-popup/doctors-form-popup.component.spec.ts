import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsFormPopupComponent } from './doctors-form-popup.component';

describe('DoctorsFormPopupComponent', () => {
  let component: DoctorsFormPopupComponent;
  let fixture: ComponentFixture<DoctorsFormPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorsFormPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsFormPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
