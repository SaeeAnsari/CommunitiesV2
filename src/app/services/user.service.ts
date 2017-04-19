import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
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
export class UserService {

  public getLoggedinInUser() {
    return this._http.get(this._url + '/1')
      .map(ret => ret.json());
  }
  public GetUser(id: number) {
    return this._http.get(this._url + '/' + id)
      .map(ret => ret.json());
  }

  private _url = 'http://localhost:49520/api/User';
  private _users: User[] = [];
  headers: Headers;

  options: RequestOptions;

  constructor(private _http: Http) {
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'q=0.8;application/json;q=0.9'
    });
    this.options = new RequestOptions({ headers: this.headers });
  }


  public GetAllActiveUsers_old() {

    let params: URLSearchParams = new URLSearchParams();

    var request = new RequestOptions();
    request.search = params;

    var ret = this._http.get(this._url, request)
      .map(ret => ret.json())
      .subscribe(sub => {
        sub.forEach(element => {

          var user = {
            id: element.ID,
            firstName: element.FirstName,
            lastName: element.LastName,
            active: element.Active,
            authenticationPortalID: element.AuthenticationPortalID
          };

          this._users.push(user);
        });
      })
    return this._users;
  }


  public GetAllActiveUsers(searchVal: string, communityID: number): Observable<any> {
    return this._http.get(this._url + '/GetSearch?communityID=' + communityID + '&searchTerm=' + searchVal)
      .map(ret => ret.json());
  }

  public AddUsertoCommunity(userID: number, communityID: number): Observable<any> {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');



    let data = new URLSearchParams();
    //data.append('userID', 1);
    //data.append('CommunityID', '1');

    return this._http.post(
      this._url + '/AddUsertoCommunity?userID=' + userID + '&communityID=' + communityID,
      data,
      { headers: this.headers }
    ).map(res => res.json())
      .catch(this.handleError)

  }


  public RemoveUserFromCommunity(userID: number, communityID: number) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');



    let data = new URLSearchParams();

    return this._http.post(
      this._url + '/RemoveUserFromCommunity?userID=' + userID + '&communityID=' + communityID,
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
