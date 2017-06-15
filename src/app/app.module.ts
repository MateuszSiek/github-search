import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';


import { AppComponent } from './app.component';

import { SearchModule } from "./search/search.module";
import { ResultCardModule } from "./result-card/result-card.module";
import { PaginatorModule } from "./paginator/paginator.module";

import {SearchRepositoryService} from "./services/search-repository.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    SearchModule,
    ResultCardModule,
    PaginatorModule
  ],
  providers: [SearchRepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
