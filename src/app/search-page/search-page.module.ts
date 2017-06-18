import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './search-page.component';

import { ResultCardModule } from "./result-card/result-card.module";
import { SearchModule } from "./search/search.module";
import { SharedModule } from "../shared/shared.module";

import { GithubApiService } from "./services/github-api.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ResultCardModule,
    SearchModule
  ],
  providers: [GithubApiService],
  exports: [SearchPageComponent],
  declarations: [
    SearchPageComponent
  ]
})
export class SearchPageModule { }
