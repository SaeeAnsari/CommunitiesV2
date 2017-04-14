import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { UserService } from '../../services/user.service';
import {StoryService} from '../../services/story.service';

@Component({
  selector: 'postAddComment',
  templateUrl: './post-add-comment.component.html',
  styleUrls: ['./post-add-comment.component.css'],
  providers: [CommentService, UserService, StoryService]
})
export class PostAddCommentComponent implements OnInit {

  @Output() commentAdded = new EventEmitter();

  newComment: string;
  private storyID: number;
  private subscription;

  constructor(private _route: ActivatedRoute, private _commentService: CommentService, private _userService: UserService, private _storyService: StoryService) {
    this.subscription = this._route.params.subscribe(params => {
      this.storyID = +params["id"];
    });
  }

  ngOnInit() {
  }

  postComment() {

    if (this.newComment != '') {

      this._userService.getLoggedinInUser().subscribe(sub => {

        let userID: number = sub.ID;

        this._commentService.PostComment(this.storyID, userID, this.newComment).subscribe(sub => {

          var commentID: number = sub;
          if(commentID > 0){
            this.newComment = '';
            this.commentAdded.emit(commentID);
          }
        })
      });
    }
  }
}
