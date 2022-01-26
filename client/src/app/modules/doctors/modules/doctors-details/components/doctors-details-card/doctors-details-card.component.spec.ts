import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsDetailsCardComponent } from './doctors-details-card.component';

describe('DoctorsDetailsCardComponent', () => {
  let component: DoctorsDetailsCardComponent;
  let fixture: ComponentFixture<DoctorsDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorsDetailsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
