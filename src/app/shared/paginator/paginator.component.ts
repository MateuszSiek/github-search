import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

const APPENDED_PAGE_LABELS_COUNT = 3;

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnChanges {
  @Input() public recordsCount: number = 0;
  @Input() public pageSize: number = 10;
  @Output() public pageChange: EventEmitter<number> = new EventEmitter<number>();

  private availablePages: number[];
  private availablePagesCount: number;
  private visiblePages: number[];
  private currentPage: number = 1;

  constructor() { }

  public changePageTo(page: number): void {
    this.currentPage = page;
    this.pageChange.emit(page);
    this.setVisiblePages(this.availablePages, this.pageSize, page);
  }

  public ngOnChanges(changes: any): void {
    if (changes.recordsCount) {
      this.setAvailablePages(this.recordsCount, this.pageSize);
      this.setVisiblePages(this.availablePages, this.pageSize, this.currentPage);
    }
  }

  public silentReset(): void {
    this.currentPage = 1;
    this.setVisiblePages(this.availablePages, this.pageSize, 1);
  }


  private createAvailablePages(count: number, pageSize: number): number[] {
    const recordsPerPage = Math.ceil(count / pageSize);
    let pages = [];
    for (let i = this.currentPage; i <= recordsPerPage; i += 1) {
      pages.push(i);
    }
    return pages;
  }

  private getVisiblePages(availPages: number[], pageSize: number, currentPage: number): number[] {
    let appendSize = APPENDED_PAGE_LABELS_COUNT;

    let availablePagesCount = availPages.length;

    let appendBefore = appendSize - Math.min(appendSize, availablePagesCount - currentPage);
    let appendAfter = Math.max(appendSize - currentPage + 1, 0);

    let sliceBefore = availPages.slice(Math.max(0, currentPage - appendSize - appendBefore - 1), currentPage - 1);
    let sliceAfter = availPages.slice(currentPage, currentPage + appendSize + appendAfter);

    return [...sliceBefore, currentPage, ...sliceAfter];
  }

  private setAvailablePages(recordsCount: number, pageSize: number): void {
    this.availablePages = this.createAvailablePages(recordsCount, pageSize);
    this.availablePagesCount = this.availablePages.length;
  }

  private setVisiblePages(availPages: number[], pageSize: number, currentPage: number): void {
    this.visiblePages = this.getVisiblePages(availPages, pageSize, currentPage);
  }
}
