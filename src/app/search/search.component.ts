import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { SortInputField, SortObject, Direction } from "./models/sort";
import { QueryData } from "./models/query-data";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() queryFieldName: string = 'q';
  @Input() fireChangeType: 'manual' | 'auto' = 'manual';
  @Input() debounceTime: number = 200;
  @Input() sortFields: SortInputField[];
  @Output() queryChange: EventEmitter<QueryData> = new EventEmitter<QueryData>();

  private queryData: QueryData = { query: '', sort: null, page: 1 };
  // private sort: sting;
  constructor() { console.log(this); }

  ngOnInit() {
  }

  setSort(value: SortObject) {
    this.queryData.sort = value;
    this.fireQueryChange();
  }
  setQueryString(value: string) {
    this.queryData.query = value;
    this.queryData.page = 1;
    this.fireQueryChange();
  }

  fireQueryChange() {
    this.queryChange.emit(this.queryData);
  }
}
