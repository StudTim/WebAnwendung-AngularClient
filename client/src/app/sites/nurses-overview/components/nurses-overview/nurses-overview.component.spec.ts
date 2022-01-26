import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NursesOverviewComponent } from './nurses-overview.component';

describe('NursesOverviewComponent', () => {
  let component: NursesOverviewComponent;
  let fixture: ComponentFixture<NursesOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NursesOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NursesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
