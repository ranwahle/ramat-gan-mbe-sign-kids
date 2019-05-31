import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MatCheckboxChange} from "@angular/material";

@Component({
  selector: 'app-photography-approval',
  templateUrl: './photography-approval.component.html',
  styleUrls: ['./photography-approval.component.scss']
})
export class PhotographyApprovalComponent implements OnInit {

  @Input() formGroup: FormGroup;
  photographApproval: boolean;
  photoUseApproval: boolean;
  constructor() { }

  ngOnInit() {
    this.formGroup.setControl('photographApproval', new FormControl(false))
    this.formGroup.setControl('photoUseApproval', new FormControl(false))
  }
  photographApprovalChanged(event: MatCheckboxChange) {
    const photoUse = this.formGroup.controls['photoUseApproval'];
    this.photographApproval = event.checked;
    if (!event.checked) {
      photoUse.disable();
    } else {
      photoUse.enable();
    }
    photoUse.setValue(photoUse.value && event.checked);
    // this.photoUseApproval = this.photoUseApproval && this.photographApproval;
  }


}
