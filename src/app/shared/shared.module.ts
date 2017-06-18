import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateSincePipe } from './pipes/date-since.pipe';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoadingComponent,DateSincePipe],
  exports: [LoadingComponent,DateSincePipe]
})
export class SharedModule { }
