import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'postOwnerDetails',
  templateUrl: './post-owner-details.component.html',
  styleUrls: ['./post-owner-details.component.css'],
  providers: [UserService]
})
export class PostOwnerDetailsComponent implements OnInit {
  

  private id: number;
  private profileImageURL: string;
  private name: string;
  private userCreatedDate = '01/01/2016';

  /*
    user = {
      id:3,
      profileImageURL: 'https://unsplash.it/40/40/?random&rand='+ Math.floor(Math.random() * 6) + 1  ,
      name: 'Saeed Ansari',
      userCreatedDate: '12/30/2016'
    };
  */
  constructor(private _userService: UserService) {

  }

  ngOnInit() {

  }

  loadData(id: number) {
    this.id = id;

    this._userService.GetUser(this.id).subscribe(s => {
      this.profileImageURL = s.ImageURL;
      this.name = s.DisplayName
      this.userCreatedDate = '01/01/2016';
    });



  }

  ngAfterContentInit() {

  }
}
