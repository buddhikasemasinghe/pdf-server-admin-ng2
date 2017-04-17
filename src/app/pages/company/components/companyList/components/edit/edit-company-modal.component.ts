import { Component, OnInit, Input } from '@angular/core';
import {CompanyModel} from "../../../../company.model";
import {CompanyService} from "../../../../company.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'edit-company',
  styleUrls: [('./edit-company-modal.component.scss')],
  templateUrl: './edit-company-modal.component.html',
  inputs: ['company'],
})

export class EditCompanyModal implements OnInit {

  modalHeader: string;
  modalContent: string = `Lorem ipsum dolor sit amet,
   consectetuer adipiscing elit, sed diam nonummy
   nibh euismod tincidunt ut laoreet dolore magna aliquam
   erat volutpat. Ut wisi enim ad minim veniam, quis
   nostrud exerci tation ullamcorper suscipit lobortis
   nisl ut aliquip ex ea commodo consequat.`;

  //company : CompanyModel;
  @Input() company :any;
  @Input() lg: boolean = false;
  constructor(private _companyService : CompanyService) {
  }

  ngOnInit() {
    // let companyObservable:Observable = this._companyService.getCompanyById(this.pk);
    // console.log(companyObservable);
    // companyObservable.subscribe(
    //     p => this.company = p
    // );
  }

  public checkboxModel = [{
    name: 'Checkbox with success',
    state: false,
    class: 'has-success checkbox'
  }, {
    name: 'Checkbox with warning',
    state: false,
    class: 'has-warning checkbox',
  }, {
    name: 'Checkbox with error',
    state: false,
    class: 'has-error checkbox'
  }];

  public checkboxPropertiesMapping = {
    model: 'state',
    value: 'name',
    label: 'name',
    baCheckboxClass: 'class'
  };

}
