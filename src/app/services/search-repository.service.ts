import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Jsonp, URLSearchParams } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable }       from 'rxjs/Observable';


import { SearchResult } from "../shared/models/search-result";
import { RequestError } from "../shared/models/request-error";

import { QueryData } from "../search/models/query-data";

import { GlobalConfig } from "../shared/global-config"

@Injectable()
export class SearchRepositoryService {

  constructor(private http: Http, private jsonp: Jsonp) { }

  getRepositories({query, sort, page}): Observable<SearchResult> {
    const headers = new Headers({ 'Content-Type': 'application/json' });

    if (query.length <= 0) {
      const emptyResponse: SearchResult = this.getEmptySearchResultObject();
      return Observable.of<SearchResult>(emptyResponse);
    }

    const params: URLSearchParams = new URLSearchParams();
    params.set('q', query);
    params.set('per_page', GlobalConfig.REPOSITORIES_PER_PAGE.toString());
    params.set('page', page.toString());

    const options = new RequestOptions({ headers: headers, search: params });
    return this.http.get(GlobalConfig.GITHUB_API_URL + '/search/repositories', options)
      .map((res: Response) => res.json())
      .catch((error: Response) => this.handleError(error));
  }

  private handleError(error: Response | any) {
    const body = error.json() || '';
    const errMsg = body.message || JSON.stringify(body);
    const requestError: RequestError = {
      code: error.status,
      statusText: error.statusText,
      msg: errMsg
    }
    const emptyResponse: SearchResult = this.getEmptySearchResultObject();
    emptyResponse.error = requestError;
    return Observable.of<SearchResult>(emptyResponse);
  }

  private getEmptySearchResultObject(): SearchResult {
    return {
      total_count: 0,
      items: []
    }
  }
}
