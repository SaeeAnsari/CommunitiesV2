import { Component, OnInit } from '@angular/core';
import { UserPost } from '../interfaces/user-post';
import { StoryService } from '../services/story.service';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import {CommunityService} from '../services/community.service';

@Component({
  selector: 'app-live-feed',
  templateUrl: './live-feed.component.html',
  styleUrls: ['./live-feed.component.css'],
  providers: [StoryService, CommunityService]
})
export class LiveFeedComponent implements OnInit {

  private userID: number;
  private posts: UserPost[] = [];
  private subscription;
  private communityID: number = 0;
  private pageIndex: number = 0;
  private communityName:string = "";

  constructor(private _storyService: StoryService, private _router: Router, private _route: ActivatedRoute, private _communityService:CommunityService) {
    this.subscription = this._route.params.subscribe(params => {
      if (params["communityID"]) {
        this.communityID = +params["communityID"];
      }
    });
  }

  getCommunityDetails(){
    this._communityService.GetCommunity(this.communityID)
    .subscribe(sub=>{
      this.communityName = sub.Name;
    })
  }

  loadStories(){
    this._storyService.GetStoriesByCommunity(this.communityID, this.pageIndex)
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
          userID: element.StoryUser.ID,
          postDate: element.Timestamp,
          userProfileImage: element.StoryUser.ImageURL,
          userFullName: element.StoryUser.DisplayName
        });
      });
    });
  }

  ngOnInit() {
    if(this.communityID > 0){
      this.getCommunityDetails();
    
      this.loadStories();
    }
  }
}
