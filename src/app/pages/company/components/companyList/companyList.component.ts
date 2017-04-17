import {Component, OnInit} from '@angular/core';

import 'style-loader!./companyList.scss';
import {CompanyService} from '../../company.service'
import {EditCompanyModal} from './components/edit/edit-company-modal.component.ts';
import {PdfCategoryService} from "./pdfCategory/pdf-category.service";
import {PdfCategoryModel} from "./pdfCategory/pdf-category.model";


@Component({
  selector: 'companyList',
  templateUrl: './companyList.html',
  directives: [EditCompanyModal]
})
export class CompanyList implements OnInit{
  companyTableData:Array<any>;
  pdfCategories:Array<PdfCategoryModel>;
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private _companyService : CompanyService, private _pdfCategoryService : PdfCategoryService) {
    this.companyTableData = _companyService.getCompanies();

  }

  ngOnInit(){
    this._pdfCategoryService
        .getAll()
        .subscribe(p => this.pdfCategories = p)
  }

}
