import { Component, OnInit, Input } from '@angular/core';

import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css'],
  providers: [UserService]
})
export class SearchItemComponent implements OnInit {
@Input() HeaderText = "";
@Input() BodyText = "";
@Input() ID;
@Input() ShowJoinButton: boolean

private existingUser: boolean = false;


  constructor(private _userService: UserService) { }

  ngOnInit() {

    console.log(this.ShowJoinButton);
  }

  joinCommunity(){
    this._userService.getLoggedinInUser().subscribe(sub=>{

      let userID: number = sub.ID;

      this._userService.AddUsertoCommunity(userID, this.ID).subscribe(sub=>{
        this.existingUser = true;
        return sub;
      });
    });    
  }
}
