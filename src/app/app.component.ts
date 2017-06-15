import { Component } from '@angular/core';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { SearchRepositoryService } from "./services/search-repository.service";

import { QueryData } from "./search/models/query-data";

import { SearchResult } from "./shared/models/search-result";
import { Repository } from "./shared/models/repository";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  errorMessage: any;
  searchResult: any;
  repositories: Repository[];
  repositoriesCount: number = 0;

  private searchQueryData: QueryData;
  private searchTerms = new Subject<any>();
  constructor(private searchRepositoryService: SearchRepositoryService) {
    console.log(this);
  }

  ngOnInit(): void {
    // this.searchTerms = new Subject<QueryData>();
    this.searchTerms
      .switchMap((queryData: QueryData) => this.searchRepositoryService.getRepositories(queryData))
      .subscribe(
      (searchResult: SearchResult) => {
        this.searchResult = searchResult;
        this.repositories = searchResult.items || [];
        this.repositoriesCount = Math.min(searchResult.total_count, 1000) || 0;
      })

    // .switchMap(term => { console.log(term); return this.searchRepositoryService.getRepositories() });
    // .catch(error => {
    //   // TODO: add real error handling
    //   console.log(error);
    //   return Observable.of<SearchResult>({});
    // });

    // this.searchRepositoryService.getRepositories().subscribe(
    //   (searchResult: SearchResult) => {
    //     this.searchResult = searchResult;
    //     this.repositories = searchResult.items || [];
    //   },
    //   error => this.errorMessage = <any>error);
  }



  search(searchQueryData: QueryData): void {
    this.searchTerms.next(searchQueryData);
  }

  setQueryData(searchQueryData: QueryData): void {
    this.searchQueryData = searchQueryData;
    this.search(this.searchQueryData);
  }

  setPage(page: number): void {
    console.log(page);
    this.searchQueryData.page = page;
    this.search(this.searchQueryData);
  }
}
