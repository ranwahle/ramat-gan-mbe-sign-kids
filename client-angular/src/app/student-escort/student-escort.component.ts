import {Component, Input, OnInit} from '@angular/core';
import {Escort} from '../model/escort';
import {FormGroup} from "@angular/forms";


@Component({
  selector: 'app-student-escort',
  templateUrl: './student-escort.component.html',
  styleUrls: ['./student-escort.component.scss']
})
export class StudentEscortComponent implements OnInit {

  @Input() formGroup: FormGroup;
  goHome: 'alone' | 'withEscort';
  escorts: Escort[];
  constructor() { }

  defaultEscoort(): Escort {
    return {fullName: '', phoneNumber: '', relation: ''};
  }

  ngOnInit() {
    this.escorts = [this.defaultEscoort()];
  }
  addEscort() {
    this.escorts.push(this.defaultEscoort())
  }

}
