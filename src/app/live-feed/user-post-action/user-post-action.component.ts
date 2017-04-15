import { Component, OnInit, Input } from '@angular/core';
import { StoryService } from '../../services/story.service';
import { UserService } from '../../services/user.service';
import {UserCommentsComponent} from '../user-comments/user-comments.component';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-user-post-action',
  templateUrl: './user-post-action.component.html',
  styleUrls: ['./user-post-action.component.css'],
  providers: [StoryService, UserService]
})

export class UserPostActionComponent implements OnInit {

  @Input() CommentCount: number;
  @Input() LikeCount: number;
  @Input() StoryID: number;
  @Input() UserID: number;


  constructor(private _storyService: StoryService, private _userService: UserService, private _modalService: NgbModal) { }

  ngOnInit() {

  }

  setLike(storyID: number) {

    this._userService.getLoggedinInUser().subscribe(s => {

      let userID = s.ID;

      this._storyService.SetLike(storyID, userID).subscribe(sub => {
        if (sub != undefined && sub == true) {
          this.LikeCount++;
        }
      });
    });
  }

  viewComments(storyID: number) {

    const modalRef = this._modalService.open(UserCommentsComponent, { windowClass: 'dark-modal' } );   
    modalRef.componentInstance.storyID = storyID;
    modalRef.componentInstance.loadComments();    
  
  }
}
