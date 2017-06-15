import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultCardComponent } from './result-card.component';
import { GeneralDescriptionComponent } from './general-description/general-description.component';
import { RepositoryDetailsComponent } from './repository-details/repository-details.component';
import { OwnerDetailsComponent } from './owner-details/owner-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ResultCardComponent, GeneralDescriptionComponent, RepositoryDetailsComponent, OwnerDetailsComponent],
  exports: [ResultCardComponent]
})
export class ResultCardModule { }
