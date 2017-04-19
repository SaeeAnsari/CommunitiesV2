import { Component, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import {StoryService} from '../services/story.service';

import { UserService } from '../services/user.service';
import { UserPost } from '../interfaces/user-post';

@Component({
  selector: 'newPost',
  templateUrl: './new-post-component.component.html',
  styleUrls: ['../../css/responsive.css', '../../css/style.css'],
  providers: [UserService, StoryService]
})
export class NewPostComponentComponent implements OnInit {
  private currentUser;
  private postForm: FormGroup;

  constructor(private _fb: FormBuilder, private _userService: UserService, private _storyService: StoryService) { }




  ngOnInit() {
    this.currentUser = this._userService.getLoggedinInUser();

    this.postForm = this._fb.group({
      post: ['', [<any>Validators.required, <any>Validators.minLength(5)]]
    });


  }

  post(model: UserPost, isValid: boolean) {
    StoryService.SavePost(model, isValid);
  }
}
