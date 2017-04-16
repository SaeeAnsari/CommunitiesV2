import { Component, OnInit, Input } from '@angular/core';
import { } from '../../interfaces/story-comment';
import { CommentService } from '../../services/comment.service';
import { UserService } from '../../services/user.service';
import { StoryService } from '../../services/story.service';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-comments',
  templateUrl: './user-comments.component.html',
  styleUrls: ['./user-comments.component.css'],
  providers: [UserService, CommentService, StoryService]
})
export class UserCommentsComponent {

  private commentPost: string;
  private comments = [];
  @Input() storyID: number;

  constructor(private _commentService: CommentService, private _userService: UserService, private _storyService: StoryService) { }

  loadComments() {
    this.comments = [];
    if (this.storyID != null && this.storyID > 0) {
      this._commentService.GetStoryComments(this.storyID).subscribe(comm => {
        comm.forEach(element => {
          let comment = {
            user: {
              id: element.User.ID,
              displayName: element.User.DisplayName,
              imageURL: element.User.ImageURL
            },
            id: element.ID,
            storyID: element.StoryID,
            comment: element.Comments,
            timestamp: element.Timestamp,
            actions: {
              supportCount: element.CommentSummary.SupportCount > 0 && element.CommentSummary.SupportCount || ''
            }
          }
          this.comments.push(comment);
        });
      });
    }
  }

  setLike(storyID: number, commentID: number) {

    this._userService.getLoggedinInUser().subscribe(s => {

      let userID = s.ID;
      let elemIndex = -1;
      this._storyService.SetLike(storyID, userID, commentID).subscribe(sub => {
        if (sub != undefined && sub == true) {

          this.comments.forEach(function (element, index) {
            if(element.id == commentID){
              elemIndex = index; 
            }
          });

          this.comments[elemIndex].actions.supportCount++;
        }
      });
    });
  }


  postComment() {
    if (this.storyID != null && this.storyID > 0) {

      this._userService.getLoggedinInUser().subscribe(s => {

        let userID = s.ID;
        this._commentService.PostComment(this.storyID, userID, this.commentPost).subscribe(ret => {

          this.loadComments();
        });

      });
    }
  }

  closeModal(){
    alert('still not working, TODO - Fix later!');
  }
}

