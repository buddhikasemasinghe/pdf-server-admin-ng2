import {Component, OnInit} from '@angular/core';

import 'style-loader!./companyList.scss';
import {CompanyService} from '../../company.service'
import {EditCompanyModal} from './components/edit/edit-company-modal.component.ts';
import {PdfCategoryService} from "./pdfCategory/pdf-category.service";
import {PdfCategoryModel} from "./pdfCategory/pdf-category.model";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {CompanyModel} from "../../company.model";


@Component({
  selector: 'companyList',
  templateUrl: './companyList.html',
  directives: [EditCompanyModal]
})
export class CompanyList implements OnInit{
  companies:Array<CompanyModel>;
  pdfCategories:Array<PdfCategoryModel>;
  errorMessage: string = '';
  isLoading: boolean = true;
  pipelineClients:Array<any>;
  order: string = 'name';
  
  constructor(private _companyService : CompanyService, 
              private _pdfCategoryService : PdfCategoryService,
              private modalService: NgbModal) {
    // this.companyTableData = _companyService.getCompanies();

  }

  ngOnInit(){

    this._companyService
        .getAll()
        .subscribe(p => this.companies = p);
    
    this._pdfCategoryService
        .getAll()
        .subscribe(p => this.pdfCategories = p);
    
    this._companyService
        .getAllPipelineClients()
        .subscribe(p => this.pipelineClients = p);
  }

  showEditCompanyModal(company:CompanyModel) {
    const activeModal = this.modalService.open(EditCompanyModal, {size: 'lg'});
    activeModal.componentInstance.modalHeader = 'Edit Company';
    activeModal.componentInstance.company = company;
    activeModal.componentInstance.pdfCategories = this.pdfCategories;
    activeModal.componentInstance.pipelineClients = this.pipelineClients;
    
  }

}
