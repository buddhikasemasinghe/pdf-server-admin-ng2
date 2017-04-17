import {Component} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import 'style-loader!./companyList.scss';
import {CompanyService} from '../../company.service'
import {EditCompanyModal} from './components/edit/edit-company-modal.component.ts';


@Component({
  selector: 'companyList',
  templateUrl: './companyList.html',
  directives: [EditCompanyModal]
})
export class CompanyList {
  companyTableData:Array<any>;
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private _companyService : CompanyService) {
    this.companyTableData = _companyService.getCompanies();
  }

  // editCompany(id:string) {
  //   const activeModal = this.modalService.open(EditCompanyModal, {size: 'lg'});
  //   activeModal.componentInstance.modalHeader = 'Edit company';
  //
  //   let companyObservable:Observable = this._companyService.getCompanyById(id);
  //   console.log(companyObservable);
  //   companyObservable.subscribe(
  //      p => activeModal.componentInstance.company = p
  //   );
  // }
  //
  // addCompany() {
  //   const activeModal = this.modalService.open(AddCompanyModal, {size: 'lg'});
  //   activeModal.componentInstance.modalHeader = 'Add company';
  // }
}
