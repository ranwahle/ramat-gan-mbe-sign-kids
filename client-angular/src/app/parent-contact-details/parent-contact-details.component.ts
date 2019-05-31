import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-parent-contact-details',
  templateUrl: './parent-contact-details.component.html',
  styleUrls: ['./parent-contact-details.component.scss']
})
export class ParentContactDetailsComponent implements OnInit {

  @Input() formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formGroup.setControl('parentName', new FormControl('', Validators.required))
    this.formGroup.setControl('parentPhone', new FormControl('', Validators.required))
  }

}
