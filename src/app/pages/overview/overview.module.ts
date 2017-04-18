import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';

import { Overview } from './overview.component';
import { routing }       from './overview.routing';

import { OverviewService } from './overview.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AppTranslationModule,
        NgaModule,
        routing
    ],
    declarations: [
        Overview
    ],
    providers: [
        OverviewService
    ]
})
export class OverviewModule {}
