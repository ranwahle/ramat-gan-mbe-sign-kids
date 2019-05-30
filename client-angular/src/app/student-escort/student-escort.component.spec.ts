import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEscortComponent } from './student-escort.component';

describe('StudentEscortComponent', () => {
  let component: StudentEscortComponent;
  let fixture: ComponentFixture<StudentEscortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentEscortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentEscortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
