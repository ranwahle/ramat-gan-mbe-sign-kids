import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentContactDetailsComponent } from './parent-contact-details.component';

describe('ParentContactDetailsComponent', () => {
  let component: ParentContactDetailsComponent;
  let fixture: ComponentFixture<ParentContactDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentContactDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
