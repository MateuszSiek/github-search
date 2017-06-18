import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateSincePipe } from './pipes/date-since.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DateSincePipe],
  providers: [DateSincePipe]
})
export class SharedModule { }
