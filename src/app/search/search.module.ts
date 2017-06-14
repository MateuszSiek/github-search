import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { SearchComponent } from './search.component';
import { InputBoxComponent } from './input-box/input-box.component';
import { SortFieldsComponent } from './sort-fields/sort-fields.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [SearchComponent, InputBoxComponent, SortFieldsComponent],
  exports: [SearchComponent]
})
export class SearchModule { }
