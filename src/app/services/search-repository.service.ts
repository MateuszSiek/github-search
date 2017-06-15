import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Jsonp, URLSearchParams } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable }       from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


import { SearchResult } from "../shared/models/search-result";

import { QueryData } from "../search/models/query-data";

@Injectable()
export class SearchRepositoryService {

  constructor(private http: Http, private jsonp: Jsonp) { }

  getRepositories(queryData: QueryData): Observable<SearchResult> {
    let headers = new Headers({ 'Content-Type': 'application/json' });

    let params: URLSearchParams = new URLSearchParams();
    params.set('q', queryData.query);
    params.set('per_page', '10');
    params.set('page', queryData.page.toString());

    console.log(params);

    let options = new RequestOptions({ headers: headers, search: params });
    return this.http.get('https://api.github.com/search/repositories', options)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    const body = error.json() || '';
    const errMsg = body.message || JSON.stringify(body);
    let requestError: {
      code: number;
      statusText: string;
      msg: string;
    } = {
        code: error.status,
        statusText: error.statusText,
        msg: errMsg
      }

    console.error(errMsg);
    return Observable.of<any>(errMsg);
  }
}
