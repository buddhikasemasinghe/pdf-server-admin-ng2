import { Component, OnInit, Input } from '@angular/core';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import {PdfCategoryModel} from "../../pdfCategory/pdf-category.model";

@Component({
  selector: 'edit-company',
  styleUrls: [('./edit-company-modal.component.scss')],
  templateUrl: './edit-company-modal.component.html',
  inputs: ['company', 'pdfCategories'],
})

export class EditCompanyModal implements OnInit {

  modalHeader: string;
  @Input() company :any;
  @Input() pdfCategories :PdfCategoryModel[];
  @Input() lg: boolean = false;
  constructor() {
  }

  ngOnInit() {
    console.log("On init");
    console.log(this.myOptions);
    for (let pdfCategory of this.pdfCategories) {
      this.myOptions.push({
        id : pdfCategory.id, name : pdfCategory.name
      })
    }

    for(let assignCategory of this.company.modes){
      //this.optionsModel.push(assignCategory.id);
    }
  }

  myOptions: IMultiSelectOption[] = [];
  optionsModel: number[] = []

  //  myOptions: IMultiSelectOption[] = [
  //    { id: 1, name: 'Option 1' },
  //    { id: 2, name: 'Option 2' }
  // ];

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

  onChange() {
    console.log(this.optionsModel);
  }

}
