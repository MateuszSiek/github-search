import { Component, EventEmitter, Input, Output } from '@angular/core';

import { SortInputField, SortObject, Direction } from "./models/sort";
import { QueryData } from "./models/query-data";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Input() public queryFieldName: string = 'q';
  @Input() public searchInputMethod: 'manual' | 'auto' = 'manual';
  @Input() public debounceTime: number = 200;
  @Input() public sortFields: SortInputField[];
  @Output() public queryChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() public sortChange: EventEmitter<SortObject> = new EventEmitter<SortObject>();

  private query: string = '';
  private sort: SortObject;

  constructor() { console.log(this); }

  private fireQueryChange() {
    this.queryChange.emit(this.query);
  }

  private fireSortChange() {
    this.sortChange.emit(this.sort);
  }

  private setSort(value: SortObject) {
    this.sort = value;
    this.fireSortChange();
  }

  private setQueryString(value: string) {
    this.query = value;
    this.fireQueryChange();
  }
}
