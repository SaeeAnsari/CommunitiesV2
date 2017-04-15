import { Component, OnInit, Input } from '@angular/core';
import { } from '../../interfaces/story-comment';
import { CommentService } from '../../services/comment.service';


@Component({
  selector: 'app-user-comments',
  templateUrl: './user-comments.component.html',
  styleUrls: ['./user-comments.component.css'],
  providers: [CommentService]
})
export class UserCommentsComponent {

  private comments = [];
  @Input() storyID: number;

  constructor(private _commentService: CommentService) { }

  loadComments() {
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
              supportCount: element.CommentSummary.SupportCount
            }
          }
          this.comments.push(comment);
        });
      });
    }
  }
}
