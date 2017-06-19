import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from "./core/core.module";
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
    CoreModule,
    SearchPageModule,
    AboutPageModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
