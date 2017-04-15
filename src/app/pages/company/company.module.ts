import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { routing }       from './company.routing';
import { Company } from './company.component';
import { CompanyList } from './components/companyList/companyList.component';
import { CompanyService } from './company.service';
import { Ng2OrderModule } from 'ng2-order-pipe';
import {EditCompanyModal} from "./components/companyList/components/edit/edit-company-modal.component";
import {AddCompanyModal} from "./components/companyList/components/add/add-company-modal.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    Ng2OrderModule,
    NgbModalModule,
    routing
  ],
  declarations: [
    Company,
    CompanyList,
    EditCompanyModal,
    AddCompanyModal
  ],
  entryComponents: [
    EditCompanyModal
  ],
  providers: [
    CompanyService
  ]
})
export class CompanyModule {}
