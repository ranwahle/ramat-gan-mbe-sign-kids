import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {

  @Input() formGroup: FormGroup;
  firstName: string;
  lastName: string;
  schoolClass: string;
  schoolName: string;

  constructor() { }

  ngOnInit() {
    this.formGroup.setControl('firstName', new FormControl('', Validators.required))
    this.formGroup.registerControl('lastName', new FormControl('', Validators.required))
    this.formGroup.registerControl('schoolClass', new FormControl('', Validators.required))
    this.formGroup.registerControl('schoolName', new FormControl('', Validators.required))

  }



}
