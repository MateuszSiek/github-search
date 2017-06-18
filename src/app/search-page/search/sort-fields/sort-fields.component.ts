import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import {SortInputField, SortObject, Direction} from "../models/sort";

@Component({
  selector: 'app-sort-fields',
  templateUrl: './sort-fields.component.html',
  styleUrls: ['./sort-fields.component.css']
})
export class SortFieldsComponent {
  @Input() sortFields: SortInputField[] = [];

  @Output() sortChange: EventEmitter<SortObject> = new EventEmitter<SortObject>();
  private sortObject: SortObject;

  constructor() { }

  setSortField(field: string) {
    let currentSortDir;
    if (this.sortObject) {
      currentSortDir = this.sortObject.direction;
    }
    let newSortDir = this.getNewSortDirection(currentSortDir);
    this.sortObject = {
      field: field,
      direction: newSortDir
    }
    this.fireSortChangeEvent();
  }

  getNewSortDirection(current): Direction {
    switch (current) {
      case Direction.ASC:
        return Direction.DESC;
      case Direction.DESC:
        return Direction.NONE;
    }
    return Direction.ASC;
  }

  getSortIcon(field: string): string {
    if (!this.sortObject || field !== this.sortObject.field) {
      return 'fa-sort';
    }
    let sort: Direction = this.sortObject.direction;
    switch (sort) {
      case Direction.ASC:
        return 'fa-sort-amount-asc';
      case Direction.DESC:
        return 'fa-sort-amount-desc';
    }
    return 'fa-sort';
  }

  fireSortChangeEvent() {
    if (this.sortObject.direction !== Direction.NONE) {
      this.sortChange.emit(this.sortObject);
    }
    else {
      this.sortChange.emit(null);
    }
  }
}
