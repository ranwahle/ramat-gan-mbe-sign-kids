import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {StudentEscortComponent} from "./student-escort/student-escort.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client-angular';

  formGroup: FormGroup;

  @ViewChild('studentEscort', null) escort: StudentEscortComponent;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({

    })
  }

  onSubmit() {


      console.log('valid', this.formGroup.valid, this.formGroup.value, this.escort.getData());
  }
}
