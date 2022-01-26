import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsOverviewComponent } from './doctors-overview.component';

describe('DoctorsOverviewComponent', () => {
  let component: DoctorsOverviewComponent;
  let fixture: ComponentFixture<DoctorsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorsOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
