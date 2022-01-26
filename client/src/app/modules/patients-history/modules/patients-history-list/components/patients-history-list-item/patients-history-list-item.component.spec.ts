import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsHistoryListItemComponent } from './patients-history-list-item.component';

describe('PatientsHistoryListItemComponent', () => {
  let component: PatientsHistoryListItemComponent;
  let fixture: ComponentFixture<PatientsHistoryListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientsHistoryListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsHistoryListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
