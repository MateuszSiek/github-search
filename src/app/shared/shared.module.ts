import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateSincePipe } from './pipes/date-since.pipe';
import { LoadingComponent } from './loading/loading.component';

import { PaginatorModule } from "./paginator/paginator.module";

@NgModule({
  imports: [
    CommonModule,
    PaginatorModule
  ],
  declarations: [LoadingComponent, DateSincePipe],
  exports: [LoadingComponent, DateSincePipe, PaginatorModule]
})
export class SharedModule { }
