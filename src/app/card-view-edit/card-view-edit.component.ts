import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Story } from '../interfaces/story';
import { StoryService } from '../services/story.service';
import { PostOwnerDetailsComponent } from './post-owner-details/post-owner-details.component';

@Component({
  selector: 'cardViewEdit',
  templateUrl: './card-view-edit.component.html',
  styleUrls: ['./card-view-edit.component.css'],
  providers: [StoryService]
})
export class CardViewEditComponent implements OnInit {

  private id: number;
  private subscription;

  private title: string;
  private mediaURL: string;
  private likeCount: number;
  private dislikeCount: number;
  private viewCount: number;
  private userID: number;


  @ViewChild(PostOwnerDetailsComponent)
  private postUser: PostOwnerDetailsComponent;




  post = {
    title: 'Lorem ipsum do',
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud.`,
    imageURL: 'https://unsplash.it/200/300/?random',
    likeCount: 221,
    dislikeCount: 432,
    commentsCount: 425,
    totalViews: 12002,
    userID: 3
  };

  constructor(private _route: ActivatedRoute, private _storyService: StoryService) {
    this.subscription = this._route.params.subscribe(params => {
      this.id = +params["id"];


    });
  }


  loadStory() {

    this._storyService.GetStory(this.id).subscribe(s => {
      this.title = s.Title;
      this.mediaURL = s.ImageURL;
      this.userID = s.UserID;

      if (s.ActionSummary != undefined) {
        this.likeCount = s.ActionSummary.SupportCount;
        this.dislikeCount = s.ActionSummary.DisagreeCount;
        this.viewCount = 0;
      }

      this.postUser.loadData(this.userID);
    });

  }

  ngOnInit() {
    this.loadStory();
  }
}
