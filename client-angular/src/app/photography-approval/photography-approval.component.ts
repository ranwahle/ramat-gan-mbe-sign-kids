import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photography-approval',
  templateUrl: './photography-approval.component.html',
  styleUrls: ['./photography-approval.component.scss']
})
export class PhotographyApprovalComponent implements OnInit {

  photographApproval: boolean;
  photoUseApproval: boolean;
  constructor() { }

  ngOnInit() {
  }
  photographApprovalChanged() {
    this.photoUseApproval = this.photoUseApproval && this.photographApproval;
  }


}
