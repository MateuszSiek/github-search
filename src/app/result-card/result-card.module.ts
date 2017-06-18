import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmChartsModule } from "@amcharts/amcharts3-angular";

import { ResultCardComponent } from './result-card.component';
import { GeneralDescriptionComponent } from './general-description/general-description.component';
import { RepositoryDetailsComponent } from './repository-details/repository-details.component';
import { OwnerDetailsComponent } from './owner-details/owner-details.component';
import { RepositoryReadmeComponent } from './repository-readme/repository-readme.component';
import { CommitStatsComponent } from './commit-stats/commit-stats.component';

import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AmChartsModule
  ],
  declarations: [
    ResultCardComponent,
    GeneralDescriptionComponent,
    RepositoryDetailsComponent,
    OwnerDetailsComponent,
    RepositoryReadmeComponent,
    CommitStatsComponent
  ],
  exports: [ResultCardComponent]
})
export class ResultCardModule { }
