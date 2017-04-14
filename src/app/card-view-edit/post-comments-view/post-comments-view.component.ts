import { Component, OnInit } from '@angular/core';
import { StoryComment } from '../../interfaces/story-comment';
import { CommentService } from '../../services/comment.service';
import {StoryService} from '../../services/story.service';
import {UserService} from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'postCommentView',
  templateUrl: './post-comments-view.component.html',
  styleUrls: ['./post-comments-view.component.css'],
  providers: [CommentService, UserService]
})
export class PostCommentsViewComponent implements OnInit {

  private comments: StoryComment[] = [];

  private subscription;
  private storyID;

  constructor(private _commentService: CommentService, private _storyService: StoryService, private _userService: UserService, private _route: ActivatedRoute) { 
     this.subscription = this._route.params.subscribe(params => {
      this.storyID = +params["id"];


    });
  }

  loadCommentsByStory() {

    this.comments = [];
    this._commentService.GetStoryComments(this.storyID).subscribe(s => {
      s.forEach(element => {
        let comm: StoryComment = {
          id: element.ID,
          storyID: element.StoryID,
          userID: element.User.ID,
          comment: element.Comments,
          likeCount: 0,
          dislikeCount: 0,
          viewCount: 0,
          timestamp: element.Timestamp,
          userDisplayName: element.User.DisplayName,
          userProfileImage: element.User.ImageURL
        };

        if(element.CommentSummary != null && element.CommentSummary.SupportCount != null){
          comm.likeCount = element.CommentSummary.SupportCount;
        }

        this.comments.push(comm);
      })
    })
  }


  ngOnInit() {

    this.loadCommentsByStory();
  }

  setLike(commentID: number, storyID: number){
    this._userService.getLoggedinInUser().subscribe(s=>{

      let userID = s.ID;
      this._storyService.SetLike(storyID, userID, commentID).subscribe(sub=>{
          this.loadCommentsByStory();
      })
    });    
  }
}
