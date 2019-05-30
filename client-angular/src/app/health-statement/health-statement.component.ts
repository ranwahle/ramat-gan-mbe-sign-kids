import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-health-statement',
  templateUrl: './health-statement.component.html',
  styleUrls: ['./health-statement.component.scss']
})
export class HealthStatementComponent implements OnInit {

  @Input() formGroup: FormGroup;
  noHealthProblems; boolean;
  needHealthAssistants: boolean;
  healthProblemDescription: string;
  typeOfMedicationRequired: string;
  allergies: string;
  medicalOrganization: string;

  constructor() {
  }

  ngOnInit() {
  }




}
