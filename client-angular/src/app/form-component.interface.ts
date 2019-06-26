import {EventEmitter} from "@angular/core";

export interface FormComponentInterface {
  valueChanged: EventEmitter<any>;
}
