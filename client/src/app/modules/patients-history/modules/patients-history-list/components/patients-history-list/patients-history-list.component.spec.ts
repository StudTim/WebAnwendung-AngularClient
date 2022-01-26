import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsHistoryListComponent } from './patients-history-list.component';

describe('PatientsHistoryListComponent', () => {
  let component: PatientsHistoryListComponent;
  let fixture: ComponentFixture<PatientsHistoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientsHistoryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsHistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
