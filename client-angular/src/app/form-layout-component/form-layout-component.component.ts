import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-form-layout-component',
  templateUrl: './form-layout-component.component.html',
  styleUrls: ['./form-layout-component.component.scss']
})
export class FormLayoutComponentComponent implements OnInit {

  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
