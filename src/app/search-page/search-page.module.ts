import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultCardModule } from "./result-card/result-card.module";
import { SearchModule } from "./search/search.module";
import { SharedModule } from "../shared/shared.module";

import { SearchPageComponent } from './search-page.component';

import { GithubApiService } from "./services/github-api.service";

// Observable operators
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

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
