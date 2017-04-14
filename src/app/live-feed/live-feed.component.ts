import { Component, OnInit } from '@angular/core';
import { UserPost } from '../interfaces/user-post';
import { UserPostService } from '../services/user-post.service';

@Component({
  selector: 'app-live-feed',
  templateUrl: './live-feed.component.html',
  styleUrls: ['./live-feed.component.css'],
  providers: [UserPostService]
})
export class LiveFeedComponent implements OnInit {

  private userID: number;
  private posts: UserPost[] = [];

  constructor(private _userPostService: UserPostService) { }

  ngOnInit() {
    this.posts = this._userPostService.getPost();
  }
}
