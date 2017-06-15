import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SearchModule } from "./search/search.module";
import { ResultCardModule } from "./result-card/result-card.module";
import { RepositoryDetailsComponent } from './repository-card/repository-details/repository-details.component';

@NgModule({
  declarations: [
    AppComponent,
    RepositoryDetailsComponent
  ],
  imports: [
    BrowserModule,
    SearchModule,
    ResultCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
