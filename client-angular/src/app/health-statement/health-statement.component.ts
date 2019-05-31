import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-health-statement',
  templateUrl: './health-statement.component.html',
  styleUrls: ['./health-statement.component.scss']
})
export class HealthStatementComponent implements OnInit {

  @Input() formGroup: FormGroup;

  noHealthProblems: boolean;

  constructor() {

  }

  valueChanged = value => {
    this.noHealthProblems = value.noHealthProblems;
  }

  ngOnInit() {

    this.formGroup.setControl('noHealthProblems', new FormControl(false));
    this.formGroup.setControl('needHealthAssistants', new FormControl(false));
    this.formGroup.setControl('healthProblemDescription', new FormControl(''));
    this.formGroup.setControl('typeOfMedicationRequired', new FormControl(''));
    this.formGroup.setControl('allergies', new FormControl(''));
    this.formGroup.setControl('medicalOrganization', new FormControl(''));


    this.formGroup.valueChanges.subscribe(this.valueChanged)


  }




}
