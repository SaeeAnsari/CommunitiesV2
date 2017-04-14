import { Injectable } from '@angular/core';
import { UserPost } from '../interfaces/user-post';
import { Http, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserPostService {

  private _url = "http://localhost:49520/api/Story";//"https://jsonplaceholder.typicode.com/posts";
  private posts: UserPost[] = [];

  public static SavePost(model: UserPost, isValid: boolean) {
    console.log(model);
  }

  constructor(private _http: Http) { }

  getPost() {

    var _posts = this._http.get(this._url)
      .map(post => post.json())
      .subscribe(postS => {

        postS.forEach(element => {

          this.posts.push({
            storyID: element.ID,
            title: element.Title,
            text: element.LongDescription,
            imageURL: element.ImageURL,
            likeCount: element.ActionSummary.SupportCount,
            dislikeCount: element.ActionSummary.DisagreeCount,
            commentsCount: element.ActionSummary.CommentCount,
            totalViews: element.ActionSummary.ViewCount,
            userID:element.StoryUser.ID,
            postDate: element.Timestamp,
            userProfileImage:element.StoryUser.ImageURL,
            userFullName: element.StoryUser.DisplayName
          });
        });
      });
    return this.posts;

  }
}
