import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FormComponentInterface} from "../form-component.interface";

@Component({
  selector: 'app-parent-contact-details',
  templateUrl: './parent-contact-details.component.html',
  styleUrls: ['./parent-contact-details.component.scss']
})
export class ParentContactDetailsComponent implements OnInit, FormComponentInterface {

  @Input() formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formGroup.setControl('parentName', new FormControl('', Validators.required))
    this.formGroup.setControl('parentPhone', new FormControl('', Validators.required))
    this.formGroup.valueChanges.subscribe(values => this.valueChanged.emit(values))
  }

  valueChanged: EventEmitter<any> = new EventEmitter();

}
