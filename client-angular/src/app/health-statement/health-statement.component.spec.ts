import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthStatementComponent } from './health-statement.component';

describe('HealthStatementComponent', () => {
  let component: HealthStatementComponent;
  let fixture: ComponentFixture<HealthStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
