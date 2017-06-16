import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

// Observable operators
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';


import { PaginatorModule } from "./paginator/paginator.module";
import { ResultCardModule } from "./result-card/result-card.module";
import { SearchModule } from "./search/search.module";

import { AppComponent } from './app.component';

import {SearchRepositoryService} from "./services/search-repository.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    PaginatorModule,
    ResultCardModule,
    SearchModule
  ],
  providers: [SearchRepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
