import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-contact-details',
  templateUrl: './parent-contact-details.component.html',
  styleUrls: ['./parent-contact-details.component.scss']
})
export class ParentContactDetailsComponent implements OnInit {

  parentPhone: string;
  parentName: string;
  constructor() { }

  ngOnInit() {
  }

}
