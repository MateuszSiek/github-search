import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// Observable operators
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from "./shared/shared.module";
import { SearchPageModule } from "./search-page/search-page.module";
import { AboutPageModule } from "./about-page/about-page.module";


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    SearchPageModule,
    AboutPageModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
