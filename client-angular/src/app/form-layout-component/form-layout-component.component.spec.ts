import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLayoutComponentComponent } from './form-layout-component.component';

describe('FormLayoutComponentComponent', () => {
  let component: FormLayoutComponentComponent;
  let fixture: ComponentFixture<FormLayoutComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLayoutComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLayoutComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
