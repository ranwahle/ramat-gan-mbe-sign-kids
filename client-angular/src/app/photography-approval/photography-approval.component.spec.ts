import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographyApprovalComponent } from './photography-approval.component';

describe('PhotographyApprovalComponent', () => {
  let component: PhotographyApprovalComponent;
  let fixture: ComponentFixture<PhotographyApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotographyApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographyApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
