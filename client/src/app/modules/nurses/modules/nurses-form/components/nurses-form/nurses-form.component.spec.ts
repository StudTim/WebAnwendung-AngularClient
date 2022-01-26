import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NursesFormComponent } from './nurses-form.component';

describe('NursesFormComponent', () => {
  let component: NursesFormComponent;
  let fixture: ComponentFixture<NursesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NursesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NursesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
