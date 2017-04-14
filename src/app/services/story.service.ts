import { Injectable } from '@angular/core';
import { Story } from '../interfaces/story';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';


import { Observable } from 'rxjs/Observable';

// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';


@Injectable()
export class StoryService {

  private _url = 'http://localhost:49520/api/Story';
  headers: Headers;

  constructor(private _http: Http) {


  }

  public GetStory(id: number) {
    return this._http.get(this._url + '/' + id)
      .map(ret => ret.json());
  }

  public SetLike(storyID: number, userID: number, commentID?: number): Observable<any> {

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let data = new URLSearchParams();

    let appendURL: string = '';

    appendURL = '/SetLike?storyID=' + storyID + '&commentID=' + commentID + '&userID=' + userID;

    return this._http.post(
      this._url + appendURL,
      data,
      { headers: this.headers }
    ).map(res => res.json())
      .catch(this.handleError)
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
