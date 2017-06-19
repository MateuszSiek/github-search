import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { SearchResult } from "../models/search-result";
import { RequestError } from "../models/request-error";

import { QueryData } from "../search/models/query-data";

import { GlobalConfig } from "../../shared/global-config"

import 'rxjs/add/operator/toPromise';

@Injectable()
export class GithubApiService {
  urlParams: URLSearchParams = new URLSearchParams('client_id=c7837423d1072eaf29f8&client_secret=5d4bce5f10d7b3cc68ffb7b274dff65facc336c3');
  headers: Headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(private http: Http) { }

  public getRepositories({query, sort, page}): Observable<SearchResult> {
    if (query.length <= 0) {
      const emptyResponse: SearchResult = this.getEmptySearchResultObject();
      return Observable.of<SearchResult>(emptyResponse);
    }

    const headers = this.headers;
    const search: URLSearchParams = this.urlParams.clone();
    search.set('q', query);
    search.set('per_page', GlobalConfig.REPOSITORIES_PER_PAGE.toString());
    search.set('page', page.toString());

    const options = new RequestOptions({ headers, search });

    return this.http.get(`${GlobalConfig.GITHUB_API_URL}/search/repositories`, options)
      .map((res: Response) => res.json())
      .catch((error: Response) => this.handleSearchError(error));
  }

  public getReadmeHTML(repositoryFullName: string): Promise<any> {
    const headers = new Headers(this.headers);
    headers.append('Accept', 'application/vnd.github.html')

    const options = new RequestOptions({ headers, search: this.urlParams });
    return this.http.get(`${GlobalConfig.GITHUB_API_URL}/repos/${repositoryFullName}/readme`, options)
      .toPromise()
      .then((content: any) => content._body)
      .catch((error: Response) => this.handleReadmeError(error));
  }

  public getCommitActivity(repositoryFullName: string): Promise<any> {
    const headers = this.headers;
    const search = this.urlParams;
    const options = new RequestOptions({ headers, search });

    return this.http.get(`${GlobalConfig.GITHUB_API_URL}/repos/${repositoryFullName}/stats/commit_activity`, options)
      .toPromise()
      .then(content => {
        if (content.status === 202) {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(this.getCommitActivity(repositoryFullName));
            }, 1000);
          })
        }
        else {
          return content.json();
        }

      })
      .catch((error: Response) => this.getErrorData(error));
  }

  private handleSearchError(error: Response | any) {
    const emptyResponse: SearchResult = this.getEmptySearchResultObject();
    emptyResponse.error = this.getErrorData(error);
    return Observable.of<SearchResult>(emptyResponse);
  }

  private getEmptySearchResultObject(): SearchResult {
    return {
      total_count: 0,
      items: []
    }
  }

  private handleReadmeError(error: Response | any) {
    return '<p>Readme not found!</p>';
  }

  private getErrorData(error: Response | any): RequestError {
    const body = error.json() || '';
    const errMsg = body.message || JSON.stringify(body);
    return {
      code: error.status,
      statusText: error.statusText,
      msg: errMsg
    }
  }
}
