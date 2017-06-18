import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmChartsModule } from "@amcharts/amcharts3-angular";

import { ResultCardComponent } from './result-card.component';
import { GeneralDescriptionComponent } from './general-description/general-description.component';
import { RepositoryDetailsComponent } from './repository-details/repository-details.component';
import { OwnerDetailsComponent } from './owner-details/owner-details.component';
import { RepositoryReadmeComponent } from './repository-readme/repository-readme.component';
import { CommitStatsComponent } from './commit-stats/commit-stats.component';


import { DateSincePipe } from "../shared/pipes/date-since.pipe";

@NgModule({
  imports: [
    CommonModule,
    AmChartsModule
  ],
  declarations: [
    ResultCardComponent,
    GeneralDescriptionComponent,
    RepositoryDetailsComponent,
    OwnerDetailsComponent,
    RepositoryReadmeComponent,
    CommitStatsComponent,
    DateSincePipe
  ],
  providers:[DateSincePipe],
  exports: [ResultCardComponent]
})
export class ResultCardModule { }
