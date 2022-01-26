import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NursesFormPopupComponent } from './nurses-form-popup.component';

describe('NursesFormPopupComponent', () => {
  let component: NursesFormPopupComponent;
  let fixture: ComponentFixture<NursesFormPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NursesFormPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NursesFormPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
