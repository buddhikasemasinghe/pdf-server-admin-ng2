import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { routing }       from './library.routing';
import { Library } from './library.component';
import { GlobalTemplateLibrary } from './components/global/library-global.component';
import { LibraryService } from './library.service';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MultiselectDropdownModule,
        NgaModule,
        Ng2OrderModule,
        NgbModalModule,
        routing
    ],
    declarations: [
        Library,
        GlobalTemplateLibrary
    ],
    entryComponents: [
        GlobalTemplateLibrary
    ],
    providers: [
        LibraryService
    ]
})
export class LibraryModule {}