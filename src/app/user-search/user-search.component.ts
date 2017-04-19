import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';

import { CommunityService } from '../services/community.service';
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms'
import { Community } from '../interfaces/community';


// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';



@Component({
  selector: 'UserSearch',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css'],
  providers: [UserService]
})
export class UserSearchComponent implements OnInit {

  private communityID: number = -1;
  private subscription;
  private userItems: User[] = [];
  searchVal: string;
  searchInput = new FormControl();

  constructor(private userService: UserService, private _route: ActivatedRoute, private _router:Router) {
   
    this.searchVal = "";
    this.subscription = this._route.params.subscribe(params => {

      if(params['communityID']){
        this.communityID = +params["communityID"];
      }
      else{
        this.communityID = -1;
      }
      
    });
  }


  bindUserGrid() {

    this.userItems = [];

    if (this.searchVal == undefined)
      this.searchVal = '';

      

    this.userService.GetAllActiveUsers(this.searchVal, this.communityID)
      .subscribe(list => {

        list.forEach(element => {

          var user = {
            id: element.ID,
            firstName: element.FirstName,
            lastName: element.LastName,
            active: element.Active,
            authenticationPortalID: element.AuthenticationPortalID,
            imageURL: element.ImageURL,
            alreadyMember: element.AlreadyMember
          };

          this.userItems.push(user);
        });

      });

  }

  ngOnInit() {
    
    this.searchInput.valueChanges
      .debounceTime(1000)
      .distinctUntilChanged()
      .subscribe(va => {
        
        this.bindUserGrid();
      });
  }

  userAddedorRemoved(){
    this.bindUserGrid();
  }

  navigateToFeed(){
    this._router.navigate(['/Feed', this.communityID])
  }

  searchUsers() {

  }

}
