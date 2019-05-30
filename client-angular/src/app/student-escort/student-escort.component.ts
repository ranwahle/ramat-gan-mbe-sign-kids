import { Component, OnInit } from '@angular/core';
import {Escort} from '../model/escort';


@Component({
  selector: 'app-student-escort',
  templateUrl: './student-escort.component.html',
  styleUrls: ['./student-escort.component.scss']
})
export class StudentEscortComponent implements OnInit {

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
