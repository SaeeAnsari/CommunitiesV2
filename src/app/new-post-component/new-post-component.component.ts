import { Component, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'

import { UserService } from '../services/user.service';
import { UserPost } from '../interfaces/user-post';
import { UserPostService } from '../services/user-post.service';

@Component({
  selector: 'newPost',
  templateUrl: './new-post-component.component.html',
  styleUrls: ['../../css/responsive.css', '../../css/style.css'],
  providers: [UserService]
})
export class NewPostComponentComponent implements OnInit {
  private currentUser;
  private postForm: FormGroup;

  constructor(private _fb: FormBuilder, private _userService: UserService) { }




  ngOnInit() {
    this.currentUser = this._userService.getLoggedinInUser();

    this.postForm = this._fb.group({
      post: ['', [<any>Validators.required, <any>Validators.minLength(5)]]
    });


  }

  post(model: UserPost, isValid: boolean) {
    UserPostService.SavePost(model, isValid);
  }
}
