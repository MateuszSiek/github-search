import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import {SortInputField, SortObject, Direction} from "./interfaces/sort";

interface QueryData {
  query: string;
  sort: {
    field: string;
    direction: Direction;
  }
}

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
  @Output() queryChange: EventEmitter<any> = new EventEmitter<any>();

  private queryData: QueryData = { query: '', sort: null };
  // private sort: sting;
  constructor() { console.log(this); }

  ngOnInit() {
  }


  setSort(value: SortObject) {
    this.queryData.sort = value;
  }
  setQueryString(value: string) {
    this.queryData.query = value;
  }

  fireQueryChange() {
    this.queryChange.emit(this.queryData);
  }
}
