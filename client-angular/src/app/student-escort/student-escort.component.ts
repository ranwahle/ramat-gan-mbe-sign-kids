import {Component, Input, OnInit} from '@angular/core';
import {Escort} from '../model/escort';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-student-escort',
  templateUrl: './student-escort.component.html',
  styleUrls: ['./student-escort.component.scss']
})
export class StudentEscortComponent implements OnInit {

  @Input() formGroup: FormGroup;
  goHome: 'alone' | 'withEscort';
  escorts: FormGroup[];
  constructor(private formBuilder: FormBuilder) { }

  escortFormGroup(): FormGroup {
    const  newGroup = this.formBuilder.group({});
    newGroup.setControl('phoneNumber', new FormControl('', Validators.required))
    newGroup.setControl('fullName', new FormControl('', Validators.required))
    newGroup.setControl('relation', new FormControl('', Validators.required))

    return newGroup;
  }

  ngOnInit() {
    this.formGroup.setControl('goHome', new FormControl('alone', Validators.required))
    this.formGroup.valueChanges.subscribe(values => this.goHome = values.goHome)
    this.escorts = [this.escortFormGroup()];
  }
  addEscort() {

    this.escorts.push(this.escortFormGroup())
  }

  getData() {
    return {goHome: this.formGroup.controls['goHome'].value().goHome,
      escorts: this.escorts}
  }

}
