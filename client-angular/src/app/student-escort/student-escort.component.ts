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

  defaultEscoort(): Escort {
    return {fullName: '', phoneNumber: '', relation: ''};
  }

  ngOnInit() {
    this.formGroup.setControl('goHome', new FormControl('alone', Validators.required))
    this.formGroup.valueChanges.subscribe(values => this.goHome = values.goHome)
    this.escorts = [this.formBuilder.group({})];
  }
  addEscort() {
    this.escorts.push(this.formBuilder.group({}))
  }

  getData() {
    return {goHome: this.goHome, escorts: this.escorts}
  }

}
