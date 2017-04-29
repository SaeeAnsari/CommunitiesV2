import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-marker-new-post',
  templateUrl: './marker-new-post.component.html',
  styleUrls: ['./marker-new-post.component.css'],
  providers: [UserService]
})
export class MarkerNewPostComponent implements OnInit {

  private user;
  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit() {    
    this.loadNewPostMarker();
  }

  loadNewPostMarker(){
     this._userService.getLoggedinInUser().subscribe(s => {

       this.user = s;
     
    });
  }

  redirecttoNewPost(){

   

    this._router.navigate(["/NewPost"]);

  }
}
