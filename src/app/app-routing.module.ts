import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { SearchPageComponent }   from './search-page/search-page.component';
import { AboutPageComponent }   from './about-page/about-page.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutPageComponent },
  { path: '**', component: SearchPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
