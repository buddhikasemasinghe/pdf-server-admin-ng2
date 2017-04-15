import {Component} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import 'style-loader!./companyList.scss';
import {CompanyService} from '../../company.service'
import {EditCompanyModal} from './components/edit/edit-company-modal.component.ts';
import {AddCompanyModal} from './components/add/add-company-modal.component.ts';


@Component({
  selector: 'companyList',
  templateUrl: './companyList.html',
})
export class CompanyList {
  companyTableData:Array<any>;

  constructor(private _companyService : CompanyService, private modalService: NgbModal) {
    this.companyTableData = _companyService.getCompanies();
  }

  editCompany() {
    const activeModal = this.modalService.open(EditCompanyModal, {size: 'lg'});
    activeModal.componentInstance.modalHeader = 'Edit company';
  }

  addCompany() {
    const activeModal = this.modalService.open(AddCompanyModal, {size: 'lg'});
    activeModal.componentInstance.modalHeader = 'Add company';
  }
}
