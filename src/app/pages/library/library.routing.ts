import { Routes, RouterModule }  from '@angular/router';

import {Library} from './library.component';
import {GlobalTemplateLibrary} from './components/global/library-global.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
    {
        path: '',
        component: Library,
        children: [
            { path: 'library-global', component: GlobalTemplateLibrary }
        ]
    }
];

export const routing = RouterModule.forChild(routes);
