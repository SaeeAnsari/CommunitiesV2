import { Injectable } from '@angular/core';
import { StoryComment } from '../interfaces/story-comment';
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
export class MediaPostService {

  constructor(private _http: Http) { }

  private _url = 'http://localhost:49520/api/ImageUpload';

  postImage(formData, type:string): Observable<any> {
    let headers = new Headers()
  
    let options = new RequestOptions({ headers: headers });
    
    return this._http.post('http://localhost:49520/api/ImageUpload/UploadImage?type=' + type, formData, options)
      .map(res => res.json())
      .catch(error => Observable.throw(error))
  }

  postVideo(formData){
    let headers = new Headers()
    
    let options = new RequestOptions({ headers: headers });
    
    return this._http.post('http://localhost:49520/api/VideoUpload/UploadVideo', formData, options)
      .map(res => res.json())
      .catch(error => Observable.throw(error))
  }
}


