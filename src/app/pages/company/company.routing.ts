import { Routes, RouterModule }  from '@angular/router';

import {Company} from './company.component';
import { CompanyList } from './components/companyList/companyList.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Company,
    children: [
      { path: 'company-list', component: CompanyList }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
