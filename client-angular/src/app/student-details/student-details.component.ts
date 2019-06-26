import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FormComponentInterface} from "../form-component.interface";

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit, FormComponentInterface {

  @Input() formGroup: FormGroup;

  @Output() valueChanged: EventEmitter<any>

  constructor() {
    this.valueChanged = new EventEmitter();
  }

  ngOnInit() {
    this.formGroup.setControl('firstName', new FormControl('', Validators.required))
    this.formGroup.registerControl('lastName', new FormControl('', Validators.required))
    this.formGroup.registerControl('schoolClass', new FormControl('', Validators.required))
    this.formGroup.registerControl('schoolName', new FormControl('', Validators.required))

    this.formGroup.valueChanges.subscribe(values => this.valueChanged.emit({
      firstName: values.firstName,
      lastName: values.lastName,
      schoolClass: values.schoolClass,
      schoolName: values.schoolName
    }))

  }





}
