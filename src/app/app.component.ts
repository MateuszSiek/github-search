import { Component, ViewChild } from '@angular/core';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { GithubApiService } from "./services/github-api.service";

import { SortObject } from "./search/models/sort";

import { SearchResult } from "./shared/models/search-result";
import { Repository } from "./shared/models/repository";
import { QueryData } from "./shared/models/query-data";
import { RequestError } from "./shared/models/request-error";

import { PaginatorComponent } from "./paginator/paginator.component";

import { GlobalConfig } from "./shared/global-config"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public searchResult: SearchResult;
  public repositories: Repository[];
  public repositoriesCount: number = 0;

  @ViewChild(PaginatorComponent) private paginatorComponent: PaginatorComponent;
  private searchInputMethod: string = GlobalConfig.SEARCH_INPUT_METHOD;
  private searchQuery: string;
  private searchSort: SortObject;
  private searchPage: number = 1;
  private queryData: QueryData = { query: '', sort: null, page: 1 };
  private searchTerms = new Subject<QueryData>();

  constructor(private githubApiService: GithubApiService) { }

  public ngOnInit(): void {
    console.log(this);
    this.searchTerms
      .switchMap((queryData: QueryData) => this.githubApiService.getRepositories(queryData))
      .subscribe((searchResult: SearchResult) => {
        if (typeof (searchResult.error) === 'object') {
          this.handleSearchError(searchResult.error);
        }
        this.setSearchResult(searchResult)
      })
  }

  private displayResults(): boolean {
    return (this.repositories || []).length > 0;
  }

  private handleSearchError(searchError: RequestError): void {

  }

  private updateSearchQuery(query: string): void {
    this.queryData.query = query;
    this.queryData.page = 1;
    if (this.paginatorComponent) {
      this.paginatorComponent.silentReset();
    }
    this.search(this.queryData);
  }

  private updateSearchSort(sort: SortObject): void {
    this.queryData.sort = sort;
    this.search(this.queryData);
  }

  private search(queryData: QueryData): void {
    this.searchTerms.next(queryData);
  }

  private setPage(page: number): void {
    this.queryData.page = page;
    this.search(this.queryData);
  }

  private setSearchResult(searchResult: SearchResult): void {
    console.log(searchResult);
    this.searchResult = searchResult;
    this.repositories = searchResult.items || [];
    this.repositoriesCount = Math.min(searchResult.total_count, GlobalConfig.MAX_REPOSITORIES || 0);
  }

}
