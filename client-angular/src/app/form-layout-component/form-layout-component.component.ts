import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormComponentInterface} from "../form-component.interface";
import {FormGroup} from "@angular/forms";
import {MatExpansionPanel} from "@angular/material";

@Component({
  selector: 'app-form-layout-component',
  templateUrl: './form-layout-component.component.html',
  styleUrls: ['./form-layout-component.component.scss']
})
export class FormLayoutComponentComponent implements OnInit, AfterViewInit {

  @Input() title: string;

  @Input() keys: string[];

  values: string[];
  hidden = false;

  @ViewChild('expansionPanel', null) expensionPanel: MatExpansionPanel;

  @Input() formGroup: FormGroup;

  @ViewChild('content', null) content : FormComponentInterface;

   summary: any;

  constructor() { }

  setSummary(values) {
    if (!this.keys){
      return;
    }
    this.values = Object.keys(values).filter(key => this.keys.find(sectionKey => sectionKey === key))
      .map(key => values[key])
    console.log('value changed', values, this.values);
  }

  ngOnInit() {
    this.expensionPanel.afterCollapse.subscribe(() => this.hidden = true);
    this.expensionPanel.afterExpand.subscribe(() => this.hidden = false);

  }

  ngAfterViewInit(): void {
    this.formGroup.valueChanges.subscribe(values => this.setSummary(values))

  }

}
