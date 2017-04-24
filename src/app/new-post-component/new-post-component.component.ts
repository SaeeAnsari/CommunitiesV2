import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import {StoryService} from '../services/story.service';


import { UserService } from '../services/user.service';
import { UserPost } from '../interfaces/user-post';
import {User} from '../interfaces/user';

@Component({
  selector: 'newPost',
  templateUrl: './new-post-component.component.html',
  styleUrls: ['./new-post-component.component.css'],
  providers: [UserService, StoryService]
})
export class NewPostComponentComponent implements OnInit {
  private currentUser;
  
  private user;
  private isUploadingImage: boolean = false;
  private uploaded: boolean = false;


 
  constructor(private _fb: FormBuilder, private _userService: UserService, private _storyService: StoryService) { }

  ngOnInit() {
    this.currentUser = this._userService.getLoggedinInUser().subscribe(sub=>{

      this.user=  {
         id:sub.ID,
         displayName: sub.DisplayName,
         imageURL: sub.ImageURL
      };
    });
  }

  post(model: UserPost, isValid: boolean) {
    StoryService.SavePost(model, isValid);
  }
}
